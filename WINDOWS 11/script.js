let taskBar = document.getElementsByClassName("taskBar")[0]
let startMenu = document.getElementsByClassName("startMenu")[0]

taskBar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startMenu.style.bottom == "50px"){
        startMenu.style.bottom = "-650px"
    }
    else{
        startMenu.style.bottom = "50px"
    }
})
