var no=document.querySelector(".no");
var advice=document.querySelector(".advice");
var url="https://api.adviceslip.com/advice/";
var num;

var change=document.querySelector(".change");
change.addEventListener('click',getData);


function  getData(){
    num=Math.floor(Math.random() * 200); 
    var url="https://api.adviceslip.com/advice/";
    url+=num;
    // main fetching of data from website
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        no.innerHTML=data.slip.id;
        advice.innerHTML=data.slip.advice;

    })
}

       