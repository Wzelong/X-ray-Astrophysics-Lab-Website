window.onload = function() {myFunction()};
let intro_text1 = document.querySelector('.introtext1');
let intro_text2 = document.querySelector('.introtext2');
let intro_image = document.querySelector('.introImage');

function myFunction() {
    intro_text1.setAttribute('style',`opacity:1`);
    intro_text2.setAttribute('style',`opacity:1`);
    intro_image.setAttribute('style',`opacity:0.5`);
}