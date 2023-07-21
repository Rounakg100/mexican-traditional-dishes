const header=document.querySelector(".header");
const menulist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");

menubtn.onclick=()=>{
    menulist.classList.add("active");
    closebtn.classList.remove("hide");
    menubtn.classList.add("hide");
    header.classList.add("ht");

}
closebtn.onclick=()=>{
    menulist.classList.remove("active");
    closebtn.classList.add("hide");
    menubtn.classList.remove("hide");
    header.classList.remove("ht");

}