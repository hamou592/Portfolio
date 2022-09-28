let menu =document.getElementById("menu");
let action =document.getElementById("actions");
menu.addEventListener("click",function(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
});
/*this is used to hide the side bar when we click on 
each li*/
document.querySelectorAll("nav ul li").forEach(element => {
    element.addEventListener("click",() => {
        menu.classList.toggle("is-active");
        action.classList.toggle("is-active");
    })
})

//adding background to the navbar onscroll

window.addEventListener("scroll",() => {
    if(innerWidth > 1279){
        if(window.scrollY > 52.66666793823242){
            document.querySelector("nav").style.background="#22282a";
            document.querySelector("nav").style.borderBottom = "1px solid #171a1c"
        }
        else{
            document.querySelector("nav").style.background="none";
            document.querySelector("nav").style.borderBottom ="none"
        }
    }
    
})



//to make loading of about section when we do scroll

window.addEventListener("scroll",()=>{
    if(window.innerWidth > 1000){
        if(window.scrollY >  262.6666564941406){
            document.querySelector("#about").style.opacity= "1";
        }
        else{
            document.querySelector("#about").style.opacity = "0";
        }        
    }
    else{
        document.querySelector("#about").style.opacity = "1";
    }

})
//to make loading of services section when we do scroll
window.addEventListener("scroll",()=>{
    if(window.innerWidth > 1000){
        if(window.scrollY >  1002){
            document.querySelector("#services").style.right = "0";
        }
        else{
            document.querySelector("#services").style.right = "-100%";
        }        
    }
    else{
        document.querySelector("#services").style.right = "0";
    }

})


//to make loading of skills section when we do scroll
window.addEventListener("scroll",()=>{
    if(window.innerWidth > 1000){
        if(window.scrollY >  2000){
            document.querySelector("#skills").style.left = "0";
        }
        else{
            document.querySelector("#skills").style.left = "-100%";
        }        
    }
    else{
        document.querySelector("#skills").style.left = "0";
    }
})