
//------------------------------ XMLHttpRequest ------------------------------
function api_req(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

//------------------------------------------------------------------
function apiRequest(url, cb) {
  api_req(url, response => {
    const result = response.results.map(element => {
      const { original_name, overview, vote_average, id, poster_path } = element;
      return {
        title: original_name,
        overview,
        vote: vote_average,
        id,
        poster_path,
      };
    });
    cb(result)
  });
}


//------------------------------ Search By Name TV Show ------------------------------
function tvSearch(name, cb) {
  const link = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&&query=${name}`;
  apiRequest(link, cb);
}


//------------------------------ Top Rated TV Show ------------------------------
function tvRated(cb) {
  const top = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US`;
  apiRequest(top, cb);
}


//------------------------------ Popular TV Show ------------------------------
function tvPopular(cb) {
  const popular = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US`;
  apiRequest(popular, cb);
}


// https://image.tmdb.org/t/p/w600_and_h900_bestv2${res.backdrop_path}
// https://image.tmdb.org/t/p/w600_and_h900_bestv2/k95sN7BDpuFGhAwIn00t3z27NQs.jpg