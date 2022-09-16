
var lat;
var long;

// taking 

var noti=document.querySelector(".notifi");
var icon=document.querySelector(".images");
var tempe=document.querySelector('.temp');
var unit_of_temp=document.querySelector(".unit");
var discr=document.querySelector(".dis");
var loc=document.querySelector(".location");



//location checking feature

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,show_error);
}
else{
    //show user, you don't have geolacation in your browser or device
    // console.log("Geolocation not found in your browswer or device");
    noti.classList.remove("hide");
    noti.innerHTML="You might have not Gealocation in your browser";
}

function setPosition(p){
    lat=(p.coords.latitude);
    long=(p.coords.longitude);

    set_values(lat,long);
}


//show user, access is denied
function show_error(){
    noti.classList.remove("hide");
    noti.innerHTML="Access Denied By The User";
}

function set_values(lat,long){
    var url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=ff9f8501909a2fd37ef10959ee6856a8";
   fetch(url)
       .then(function(response){
           let data=response.json();
           return data;
       })
       .then(function(data){
           var img_id=data.weather[0].icon;
           icon.src="icons/"+img_id+".png";
           discr.innerHTML=(data.weather[0].description);
           tempe.innerHTML=Math.floor((data.main.temp)-273);
           loc.innerHTML=data.name+","+data.sys.country;
           
       })
   
}
