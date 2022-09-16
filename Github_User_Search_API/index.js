 var submit=document.querySelector(".submit");

 
 
 
 submit.addEventListener('click',searching);
 var input=document.querySelector(".search");
 input.addEventListener('keyup',function(e){
    //if user hit enter 
    if(e.which===13){
       searching();
    }
    
  });
    // defining all component of the card
    var user_img1=document.querySelector(".user_image");
    var name1=document.querySelector(".name");
    var user_name1=document.querySelector(".user_name");
    var f_no1=document.querySelector(".f_no");
    var fg_no1=document.querySelector(".fg_no");
    var repo1=document.getElementById("repo");
    var bio1=document.getElementById("bio");
    var blog1=document.getElementById("blog");
    var location1=document.getElementById("location");
    var create1=document.getElementById("create");
    var update1=document.getElementById("update");
    var img_link1=document.querySelector(".img_link");

 function searching(){
    document.querySelector(".search_bar").classList.remove("shift");
    document.querySelector(".result").classList.remove("hidden");
    var user_name=document.querySelector(".search").value;
    var url="https://api.github.com/users/";
    url+=user_name;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.querySelector('.fail_to_load').classList.add("hidden");
       user_img1.src=data.avatar_url;
       name1.innerHTML=data.name;
       user_name1.innerHTML=data.login;
       f_no1.innerHTML=data.followers;
       fg_no1.innerHTML=data.following;
       repo1.innerHTML="No.of Public Repos :"+" "+ data.public_repos;
       
       if(data.bio==null){
        bio1.innerHTML="none";
       }
       else{
        bio1.innerHTML=data.bio;
       }
       if(data.blog==""){
           blog1.innerHTML="none";
       }
       else{
           blog1.innerHTML=data.blog;
       }
       location1.innerHTML="Location : "+" "+data.location;
       create1.innerHTML=data.created_at;
       update1.innerHTML=data.updated_at;
       img_link1.href=data.html_url;
       // if user_name is not valid
       if(create1.innerText=='undefined'){
           console.log("i am in!!");
        document.querySelector(".search_bar").classList.add("shift");
        document.querySelector(".result").classList.add("hidden");
        document.querySelector('.fail_to_load').classList.remove("hidden");   
    }

    })
  
 }