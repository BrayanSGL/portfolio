// carrusel
const projects = document.querySelector(".projects");
const punto = document.querySelectorAll(".punto");

punto.forEach((onePunto, i) => {
  punto[i].addEventListener("click", () => {
    let position = i;
    let operaton = position * -100/3;
    projects.style.transform = `translateX(${operaton}%)`;

    punto.forEach((onePunto, i) => {
      punto[i].classList.remove("active");
    });
    punto[i].classList.add("active");
  });
});
