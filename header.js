const header = document.querySelector('.header');

document.addEventListener("mousewheel", function(event){
    if (event.wheelDelta >= 0) {
        header.style.display = "";
        setTimeout(function(){header.style.opacity = "1"}, 10);
    } else {
        header.style.opacity = "0";
        setTimeout(function(){header.style.display = "none"}, 200);
    }
});