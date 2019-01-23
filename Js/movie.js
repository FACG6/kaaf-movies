var api_key = `78af21bc3ecda1d6aa8343b5d1a61ada`;

function api_req(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

//------------ search by name ---------
function movieList(name, cb) {
  var link = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`;
  api_req(link, response => {
    let arr = response.results.map(element => {
      const { original_title, overview, vote_average, id, poster_path } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id,
        poster_path,
      };
    });
    cb(arr);  
  });
}



//------------ top Rated ---------
function topRated(cb) {
  var top = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;

  api_req(top, response => {
    let toparr = response.results.map(element => {
      const { original_title, overview, vote_average, id, poster_path } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id,
        poster_path,
      };
    });
    cb(toparr)
  });
}
//------------ popular ---------
function popular() {
  var popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
  api_req(popular, response => {
    const popular = response.results.map(element => {
      const { original_title, overview, vote_average, id, poster_path } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id,
        poster_path,
      };
    });
    cb(popular);
  });
}
//------------ similar ---------
function similar(id, cb) {
  var same = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`;
  api_req(same, response => {
    let similar = response.results.map(element => {
      const { original_title, overview, vote_average, id, poster_path } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id,
        poster_path,
      };
    });
    cb(similar)
  });
}






// https://image.tmdb.org/t/p/w600_and_h900_bestv2${res.backdrop_path}
// https://image.tmdb.org/t/p/w600_and_h900_bestv2/k95sN7BDpuFGhAwIn00t3z27NQs.jpg