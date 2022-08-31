function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", () => {
  span.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color:' + span.textContent
  );});
