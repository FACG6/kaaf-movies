const search = document.getElementById('submit');
const imglink = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
let moreDetails = document.createElement('div');   
search.addEventListener("click", (event) => {
    moreDetails.innerHTML = "";
    event.preventDefault();

    theResult()
});
function theResult() {
    const inputvalue = document.querySelector(".inputvalue").value;
    if(inputvalue==false) alert('You should fill the input');
    moreDetails.innerHTML = "";
    movieList(inputvalue, render);
   
};
const render = (arrayofmovie) => {
    const mainsection = document.getElementsByClassName('maindisplay')[0];
    if(arrayofmovie.result===''){
        mainsection.innerHTML="";
    }
    arrayofmovie.forEach(element => {
       
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
        //// Give the Element Values
        b_h4Rates.innerText = element.title;
        b_h4title.innerText = element.vote;
        imgdisplay.src = imglink + element.poster_path;
        pOverview.innerText = element.overview;
        ///// Create btn see more
        const seeMorebtn = document.createElement('button');
        seeMorebtn.classList.add('seeMorebtn');
        seeMorebtn.textContent = 'See More';
        divInfo.appendChild(seeMorebtn);
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

            const result = arrayofmovie.filter(c => c.id === ids);
            /// Give Values to Element
            imgDetails.src = imglink + result[0].poster_path;
            h1Details.innerText = result[0].title;
            h3Details.innerHTML = "Voite : -" + result[0].vote +"- M";
            pDetails.innerText = result[0].overview;

            similar(ids, (arr) => {
                arr.forEach(element => {
                    render(arr);
                })
            })
        });
    });

}


