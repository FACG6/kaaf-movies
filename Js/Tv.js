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
function tvSearch(name, cb) {
  var link = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&&query=${name}`;
  api_req(link, response => {
    let arr = response.results.map(element => {
      const { original_name, overview, vote_average, id, poster_path } = element;
      return {
        title: original_name,
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
function tvRated(cb) {
  var top = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US`;

  api_req(top, response => {
    let toparr = response.results.map(element => {
      const { original_name, overview, vote_average, id, poster_path } = element;
      return {
        title: original_name,
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
function tvPopular() {
  var popular = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US`;
  api_req(popular, response => {
    const popular = response.results.map(element => {
      const { original_name, overview, vote_average, id, poster_path } = element;
      return {
        title: original_name,
        overview,
        vote: vote_average,
        id,
        poster_path,
      };
    });
    cb(popular);
  });
}


// https://image.tmdb.org/t/p/w600_and_h900_bestv2${res.backdrop_path}
// https://image.tmdb.org/t/p/w600_and_h900_bestv2/k95sN7BDpuFGhAwIn00t3z27NQs.jpg