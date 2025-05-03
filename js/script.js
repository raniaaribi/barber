let  navbar = document.querySelector('.navbar');
let  menubtn = document.querySelector('.menubtn');
let  menu = document.querySelector('.menu');
menubtn.onclick=function()
{
    const position = window.getComputedStyle(navbar).right;
    if(position=="-300px"){
        navbar.style.right="0px";
        menu.classList.replace("fa-bars","fa-times");
    }
    else{
        navbar.style.right="-300px";
        menu.classList.replace("fa-times" , "fa-bars");
    }
}