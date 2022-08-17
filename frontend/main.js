import "core-js/stable";
import "regenerator-runtime/runtime";

import './assets/css/style.css';

console.log("frontend valid - verificar!");

// const inputs = document.querySelectorAll(".form-group input");


const formRegister = document.getElementById("formRegister");

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  const fieldInputs = formRegister.querySelectorAll(".form-group input");

  for(let field of fieldInputs) {
    
    if (field.value == "") {
      const divParent = field.parentNode;
      const message = field.name === "email" ? "Informe um email válido" : "Informe uma senha válida";

      console.log(field);
      console.log(field.value);
      console.log(field.parentNode);
      const span = createSpan(message);
      divParent.appendChild(span);
    }
  }
});

function createSpan(message) {
  const classError = "text-center d-block fs-6 text-danger fst-italic".split(" ");

  const span = document.createElement("span");
  span.textContent = message;
  
  classError.forEach((classText) => {
    span.classList.add(classText);
  })

  return span;
}


