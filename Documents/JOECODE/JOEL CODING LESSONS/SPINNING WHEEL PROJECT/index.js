const edit = document.getElementById("edit"); //selector for edit property
const result = document.getElementById("result"); //selector for result property
const hide = document.getElementById("hide"); //selector for hide property
const circle = document.querySelector("#circle");
const add = document.querySelector("#add");
const inputsContainer = document.getElementById("inputs-container");
const allInputs = [...document.querySelectorAll(".item")];

// here ia a function i want to use to generage random colors for the backgroundColor
const colors = ["red", "blue", "green", "yellow", "pink", "teal", "orange"];
const selectRandomColor = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

// here is the click function for the inputs to show and close on click
edit.addEventListener("click", function () {
  let height = inputsContainer.style.height;
  if (height === "0px") {
    inputsContainer.style.height = "auto";
  } else {
    inputsContainer.style.height = "0px";
  }
});

// this is the shit you did
result.addEventListener("click", function () {
  result.style.color = "red";
  edit.style.color = "black";
  hide.style.color = "black";
});

let radi = [];
let sections = [];

// i made this stuff a function so we can call it anytime to give the radi angles
const radLayout = (radi) => {
  radi.forEach((item, index) => {
    item.style.transform = `rotate(${
      (index + 1) * (360 / radi.length) + 90
    }deg)`;
  });
};

// same here
const sectionLayout = (sections) => {
  sections.forEach((item, index) => {
    const rot = () => {
      if (sections.length % 4 === 0) {
        return (index + 1) * (360 / sections.length) - 45;
      } else if (sections.length % 2 === 0) {
        return (index + 1) * (360 / sections.length);
      } else {
        return (index + 1) * (360 / sections.length) - 90;
      }
    };
    // console.log(rot());
    item.style.transform = `rotate(${rot()}deg)`;
  });
};

// add new radius & section
add.addEventListener("click", () => {
  const child = document.createElement("div");
  child.setAttribute("class", "radi");
  const section = document.createElement("div");
  section.setAttribute("class", "sections");
  // adding unique id
  sections.forEach((i, index) => {
    i.setAttribute("id", `section${index}`);
  });

  let inputValues = [];
  allInputs.forEach((i) => {
    if (i.value !== "") {
      inputValues.push(i.value);
    }
  });

  // let background = [...radi].map((i) => {
  //   let color = selectRandomColor(colors);
  //   let deg = ` ${360 / radi.length}`;
  //   return `${color} ${deg}deg`;
  // });
  console.log(inputValues);

  if (radi.length >= 7) {
    return;
  } else {
    inputValues.forEach((i) => {
      if (i) {
        circle.appendChild(child.cloneNode(true));
        circle.appendChild(section.cloneNode(true));

        radi = document.querySelectorAll(".radi");
        sections = document.querySelectorAll(".sections");

        radLayout(radi);
        sectionLayout(sections);
        sections.forEach((i, index) => {
          i.innerHTML = inputValues[index];
        });
      }
    });
    // circle.style.background = `conic-gradient(${background.join(",")})`;
  }
});

hide.addEventListener("click", () => {
  const allRadi = [...document.querySelectorAll(".radi")];
  const allSections = [...document.querySelectorAll(".sections")];
  // allRadi.splice(0, allRadi.length);
  if (allRadi.length > 1) {
    allRadi.forEach((i) => circle.removeChild(i));
    allSections.forEach((i) => circle.removeChild(i));
  } else {
    return;
  }
});