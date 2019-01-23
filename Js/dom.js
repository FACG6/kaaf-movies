let search = document.querySelector(".search");
// console.log(search);



search.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputvalue = document.querySelector(".inputvalue").value;

    let arrayofmovie = movieList(inputvalue);
    console.log(arrayofmovie);
})














// arrayofmovie.forEach(element => {
//     var img = document.createElement("img");
//     img.src = "";
//     img.addEventListener(click, () => {

//     })
    
// });
