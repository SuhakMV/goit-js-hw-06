const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', newInput);

function newInput(a) {
    output.textContent = a.currentTarget.value;

    if(a.currentTarget.value === "") {
        output.textContent = "Anonymous";
    }
}