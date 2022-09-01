const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = range.value + 'px';

range.addEventListener("input", 
function() {
   text.style.fontSize = range.value + 'px';
});