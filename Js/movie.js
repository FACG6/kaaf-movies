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
function movieList() {
  var link = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=mad`;
  api_req(link, response => {
    const arr = response.results.map(element => {
      const { original_title, overview, vote_average, id } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id
      };
    });
    console.log(arr);
  });
}
//------------ top Rated ---------
function topRated() {
  var top = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;

  api_req(top, response => {
    const toparr = response.results.map(element => {
      const { original_title, overview, vote_average, id } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id
      };
    });
    console.log(toparr);
  });
}
//------------ popular ---------
function popular() {
  var popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
  api_req(popular, response => {
    const popular = response.results.map(element => {
      const { original_title, overview, vote_average, id } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id,
      };
    });
    console.log(popular);
  });
}
//------------ similar ---------
function similar(id) {
  var same = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`;
  api_req(same, response => {
    const popular = response.results.map(element => {
      const { original_title, overview, vote_average, id } = element;
      return {
        title: original_title,
        overview,
        vote: vote_average,
        id
      };
    });
    console.log(popular);
  });
}
