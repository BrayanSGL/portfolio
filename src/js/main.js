//burger menu
const burguerButton = document.querySelector(".burguer-button");
const menuOptions = document.querySelector(".menu-options");
//boton en mobile
const buttonMore = document.querySelector("#more");
const infoContainer = document.querySelector(".info-container");
const socialContainer = document.querySelector(".social-container");
// carrusel
const projects = document.querySelector(".projects");
const punto = document.querySelectorAll(".punto");


//burger menu
burguerButton.addEventListener("click", () => {
  menuOptions.classList.toggle("active");
  burguerButton.classList.toggle("active");
});

//boton en mobile
buttonMore.addEventListener("click", () => {
  infoContainer.classList.toggle("active");
  socialContainer.classList.toggle("active");
  buttonMore.classList.toggle("active");
  if (buttonMore.classList.contains("active")) {
    buttonMore.innerHTML = "Ver menos";
  } else {
    buttonMore.innerHTML = "Ver más";
  }
});

// carrusel
punto.forEach((onePunto, i) => {
  punto[i].addEventListener("click", () => {
    let position = i;
    let operaton = (position * -100) / 3;
    projects.style.transform = `translateX(${operaton}%)`;

    punto.forEach((onePunto, i) => {
      punto[i].classList.remove("active");
    });
    punto[i].classList.add("active");
  });
});
