const edit = document.getElementById("edit"); //selector for edit property
const result = document.getElementById("result"); //selector for result property
const hide = document.getElementById("hide"); //selector for hide property

edit.addEventListener("click", function () {
  edit.style.color = "red";
  result.style.color = "black";
  hide.style.color = "black";
});

result.addEventListener("click", function () {
  result.style.color = "red";
  edit.style.color = "black";
  hide.style.color = "black";
});

hide.addEventListener("click", function () {
  hide.style.color = "red";
  edit.style.color = "black";
  result.style.color = "black";
});

const circle = document.querySelector("#circle");
const add = document.querySelector("#add");

let radi = [];

add.addEventListener("click", () => {
  const child = document.createElement("div");
  child.setAttribute("class", "radi");
  const span = document.querySelector("#span");
  span.innerHTML = radi.length + 1;
  console.log(radi.length);

  if (radi.length < 1) {
    circle.appendChild(child.cloneNode(true));
    circle.appendChild(child.cloneNode(true));
    span.innerHTML = 2;
  } else {
    circle.appendChild(child);
  }

  radi = document.querySelectorAll(".radi");
  radi.forEach((item, index) => {
    item.style.transform = `rotate(${(index + 1) * (360 / radi.length)}deg)`;
  });
});
