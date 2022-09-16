var submit = document.querySelector(".submit");

submit.addEventListener('click', searching);
var input = document.querySelector(".search");
input.addEventListener('keyup', function (e) {
    //if user hit enter 
    if (e.which === 13) {
        searching();
    }

});
// defining all component of the card

var title1 = document.querySelector('.title');
var date1 = document.querySelector('.date');
var time1 = document.querySelector('.runtime');
var genre1 = document.querySelector('.genre');
var director1 = document.querySelector('.director');
var plot1 = document.querySelector('.plot');
var lang1 = document.querySelector('.lang');
var country1 = document.querySelector('.country');
var rating1 = document.querySelector('.rating');
var type1 = document.querySelector('.type');



var card_changing=document.querySelector(".card");
card_changing.addEventListener('click',function(){
    card_changing.classList.toggle('rotating');
    document.querySelector(".front").classList.toggle("hidden");
})

//using api to fetch data
function searching() {
    document.querySelector(".card").classList.remove("hidden");
    var i = 0;
    var changing = '';
    var array = [];
    document.querySelector(".result").classList.remove("hidden");
    var user_name = document.querySelector(".search").value;
    for (i = 0; i < user_name.length; i++) {
        array.push(user_name[i]);
        if (array[i] == " ") {
            array[i] = "+";
        }
    }
    for (i = 0; i < user_name.length; i++) {
        changing += array[i];
    }
    var url = "http://www.omdbapi.com/?apikey=d08eb348&t=";
    url += changing;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        document.querySelector('.image').src=data.Poster;
        title1.innerHTML=data.Title;
        date1.innerHTML=data.Released;
        time1.innerHTML=data.Runtime;
        genre1.innerHTML=data.Genre;
        director1.innerHTML=data.Director;
        plot1.innerHTML=data.Plot;
        var len=data.Plot;
        if(len.length>150){
            document.querySelector(".same").style.marginTop="2px";
            document.querySelector(".same").style.marginBottom="1px";
            plot1.style.fontSize="12px";
        }
        lang1.innerHTML=data.Language;
        country1.innerHTML=data.Country;
        rating1.innerHTML=data.imdbRating;
        type1.innerHTML=data.Type;
    })



}