const search = document.getElementById('submit');
const imglink = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
let moreDetails = document.createElement('div');
search.addEventListener("click", (event) => {
    moreDetails.innerHTML = "";
    event.preventDefault();
    const inputvalue = document.querySelector(".inputvalue").value;
    if (inputvalue == false) alert('You should fill the input');
 
    theResult(inputvalue)
});
function theResult(inputvalue) {
    moreDetails.innerHTML = "";
    tvSearch(inputvalue, render);

};
const CreateElementsFun = (element) => {
    const mainsection = document.getElementsByClassName('maindisplay')[0];

    //// Create Element
    const divcard = document.createElement('div');
    const imgdisplay = document.createElement('img');
    const divInfo = document.createElement('div');
    const h4titleRates = document.createElement('h4');
    const b_h4title = document.createElement('b');
    const b_h4Rates = document.createElement('b');
    const pOverview = document.createElement('p');

    //// Give Style to Element
    divcard.classList.add('card');
    imgdisplay.classList.add('img--card');
    h4titleRates.classList.add('h4-contanier');
    b_h4title.classList.add('title--card');
    b_h4Rates.classList.add('rates--card');
    divInfo.classList.add('container');
    //// Append Elements
    mainsection.appendChild(divcard);
    divcard.appendChild(imgdisplay);
    divcard.appendChild(divInfo);
    h4titleRates.appendChild(b_h4title);
    h4titleRates.appendChild(b_h4Rates);
    divInfo.appendChild(h4titleRates);
    pOverview.classList.add('p_desc');
    divInfo.appendChild(pOverview);
    ///// Create btn see more
    const seeMorebtn = document.createElement('button');
    seeMorebtn.classList.add('seeMorebtn');
    seeMorebtn.textContent = 'See More';
    divInfo.appendChild(seeMorebtn);
    //// Give the Element Values
    b_h4Rates.innerText = element.title;
    b_h4title.innerText = element.vote;
    imgdisplay.src = imglink + element.poster_path;
    pOverview.innerText = element.overview;
    //// btn see more Event listener
    seeMorebtn.addEventListener('click', () => {
        const ids = element.id;
        moreDetails.innerHTML = '';
        mainsection.innerHTML = "";
        /// Create div Details I
        const h1Details = document.createElement('h1');
        const imgDetails = document.createElement('img');
        const h3Details = document.createElement('h3');
        const pDetails = document.createElement('p');
        /// Give Details style
        moreDetails.classList.add('details');
        imgDetails.classList.add('img-details');
        h1Details.classList.add('h1-details');
        h3Details.classList.add('rates-details');
        pDetails.classList.add('des-details');
        /// Append Element
        moreDetails.appendChild(imgDetails);
        moreDetails.appendChild(h1Details);
        moreDetails.appendChild(h3Details);
        moreDetails.appendChild(pDetails);
        mainsection.appendChild(moreDetails);

        /// Give Values to Element
        imgDetails.src = imglink + element.poster_path;
        h1Details.innerText = element.title;
        h3Details.innerHTML = "Voite : -" + element.vote + "- M";
        pDetails.innerText = element.overview;
    });

}
const render = (arrayofmovie) => {

    arrayofmovie.forEach(element => {
        //Calling create function
        CreateElementsFun(element);
    });

}


const pupulersection= () => tvPopular(render);

pupulersection();


