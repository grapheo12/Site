var box = document.getElementById("header_trial");
var scrollcount;

function changebox(){
    scrollcount = document.documentElement.scrollTop / window.innerHeight;
    if (scrollcount < 0.5)
        box.className = "header_box";
    else
        box.className = "header_box1";
}

window.onscroll = changebox;



