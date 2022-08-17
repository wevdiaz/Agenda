import "core-js/stable";
import "regenerator-runtime/runtime";

import './assets/css/style.css';


const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");

// formRegister.addEventListener("submit", checkFieldsForm );

// formLogin.addEventListener("submit", checkFieldsForm );

function createSpan(message) {
  const classError = "text-center d-block fs-6 text-danger fst-italic".split(" ");

  const span = document.createElement("span");
  span.textContent = message;
  
  classError.forEach((classText) => {
    span.classList.add(classText);
  })

  return span;
}

function clearMessageError(form) {
  const messagesError = form.querySelectorAll(".form-group span");

  if (messagesError) {

    messagesError.forEach((message)=> {
      message.remove();     
    });
  }

}

function checkFieldsForm(e) {

  clearMessageError(e.target);

  const fieldInputs = e.target.querySelectorAll(".form-group input");

  for(let field of fieldInputs) {
    
    if (field.value == "") {
      const divParent = field.parentNode;
      const message = field.name === "email" ? "Informe um email válido" : "Informe uma senha válida";
      
      const span = createSpan(message);
      divParent.appendChild(span);
      e.preventDefault();
    }
  }
}

function removeMessageUser() {
  const messageUser = document.querySelector("boxMessage");

  console.log(messageUser);

  if (messageUser) {
    setTimeout(()=> {
      messageUser.style.display= "none";
      messageUser.style.transition= ".5s";
    }, 3000)
  }
}

const formContact = document.querySelector("form");

formContact.addEventListener("load", removeMessageUser);

