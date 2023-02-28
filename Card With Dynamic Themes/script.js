const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", "#0080ff");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#ff0044");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#1eff00");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#7e08ec");
        }
        else{
            theme.style.setProperty("--theme-color", "#fbff00");
        }
    });
});