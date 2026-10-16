let navLogo = document.getElementById("nav-logo-cont");
let logo = document.getElementById("nav-logo");
let navBar = document.getElementById("nav3");
let cancelBtn = document.getElementById("cancel");


navLogo.addEventListener("click",()=>{
    navLogo.style.display="none";
    navBar.style.display="block";
})

document.addEventListener("click",(event)=>{
    if(!navBar.contains(event.target) && !navLogo.contains(event.target)){
       navBar.style.display="none";
    navLogo.style.display="block";
    }
})

cancelBtn.addEventListener("click",()=>{
    navBar.style.display="none";
    navLogo.style.display="block";
})