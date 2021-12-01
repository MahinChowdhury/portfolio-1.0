let themeDots = document.getElementsByClassName("theme-dot");
let theme = localStorage.getItem('theme');
const toTop = document.querySelector('.to-top');

if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

for(var i=0 ; i<themeDots.length ; i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        console.log(mode);
        setTheme(mode);
        lastmode = mode;
    })
}

function setTheme(mode){
    if(mode == "light"){
        document.getElementById('theme-style').href = "style.css";
    }
    else if(mode=="blue"){
        document.getElementById('theme-style').href = "blue.css";
    }
    else if(mode=="green"){
        document.getElementById('theme-style').href = "green.css";
    }
    else if(mode=="purple"){
        document.getElementById('theme-style').href = "purple.css";
    }

    localStorage.setItem('theme',mode);

}

window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})