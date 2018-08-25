var myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome to JS';

var myBtn = document.querySelector('button');

myBtn.onclick = function(){
    alert("Hello World!");
}

document.addEventListener("DOMContentLoaded", function(event) {
    alert('just a sec..');    
});

window.onbeforeunload = function(e){
    alert('do you really want to close');
}