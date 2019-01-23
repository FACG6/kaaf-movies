
function api_req(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
//-------------------------- search by name ------------------------------
function movieList(name, cb) {
  const link = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`;
  apiRequest(link, cb);
}
//-------------------------- top Rated -----------------------
function topRated(cb) {
  const top = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
  apiRequest(top, cb);
}
//-------------------------- popular -------------------
function popular(cb) {
  const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
  apiRequest(popular, cb);
}
//-------------------------- similar ---------------------
function similar(id, cb) {
  const same = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`;
  apiRequest(same, cb);
}
function apiRequest(url, cb) {
  api_req(url, response => {
    const similar = response.results.map(element => {
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