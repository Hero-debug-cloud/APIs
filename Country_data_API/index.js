var submit = document.querySelector(".submit");
submit.addEventListener("click", result);
var input = document.querySelector(".search");
input.addEventListener('keyup', function (e) {
    //if user hit enter 
    if (e.which === 13) {
        result();
    }

});

//all variable to change the card 

var c_name=document.querySelector(".country_name");
var cap_name=document.querySelector(".capital_name");
var r_name=document.querySelector(".region_name");
var popu=document.querySelector(".population_number");
var area=document.querySelector(".area_number");
var flag=document.querySelector(".flag_img");
var code_name=document.querySelector(".code_name");
var currency_name=document.querySelector(".curr");
var sym=document.querySelector(".sym");
var lang=document.querySelector(".language_name");



var value;
var value_1;
function result() {

    //Getting all information of a country
    document.querySelector(".information").classList.remove("hidden");
    document.querySelector(".images").classList.remove("hidden");
    document.querySelector(".not_found").classList.add("hidden");
    value = document.querySelector('.search').value;
    var url_1 = "https://restcountries.com/v2/name/";
    url_1 += value + "?fullText=true";
    fetch(url_1).then((response) => {
        return response.json();
    }).then((data) => {
        if(data.status==404){
            document.querySelector(".information").classList.add("hidden");
            document.querySelector(".images").classList.add("hidden");
            document.querySelector(".not_found").classList.remove("hidden");
            return;
        }
        value_1=data[0].name;
        c_name.innerHTML=data[0].name;
        cap_name.innerHTML=data[0].capital;
        r_name.innerHTML=data[0].region;
        area.innerHTML=data[0].area;
        popu.innerHTML=data[0].population;
        // flag.src=data.png;
        flag.src=(data[0].flags.png);
        code_name.innerHTML=data[0].currencies[0].code;
        currency_name.innerHTML=data[0].currencies[0].name;
        sym.innerHTML=data[0].currencies[0].symbol;
        lang.innerHTML=data[0].languages[0].name;
    })
    //Getting all name and places of a country
    var url_2 = "https://pixabay.com/api/?key=26757050-bfa1a414c5c8acde307b45836&q=";
    url_2 += value_1 + "&image_type=photo&pretty=true"

    fetch(url_2).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data.hits[2].previewURL);
        var container=document.querySelector(".images");
        container.innerHTML="";
        var im=data.hits;
        im.forEach(function(e){
            var src=(e.previewURL);
            
            container.innerHTML+="<img src=\""+src+"\" class=\"each_img\">";
        });
    })
}

