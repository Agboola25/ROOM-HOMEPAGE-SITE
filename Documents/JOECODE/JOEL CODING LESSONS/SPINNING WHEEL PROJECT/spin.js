const add = document.getElementById("add");
const inputsContainer = document.getElementById("inputs-container");
const label = document.getElementById("newItem");
const color = document.getElementById("newColor");
const mainAdd = document.getElementById("mainAdd");
const edit = document.getElementById("edit");
const editContainer = document.querySelector(".edit-container");
const editsInputsContainer = document.querySelector(".edit-inputs-container");
const update = document.getElementById("update");

const updateLabel = [...document.querySelectorAll(".update-label")];
const updateColor = [...document.querySelectorAll(".update-color")];

let sectors = [];

const ctx = document.querySelector("#wheel").getContext`2d`;
const rad = ctx.canvas.width / 2;
const PI = Math.PI;
const TAU = 2 * PI;

//* Draw sectors and  texts to canvas *//
const drawSector = (sector, i, arr) => {
  const arc = TAU / arr.length;
  const ang = arc * i;
  ctx.save();
  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();
  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  //
  ctx.restore();
};

add.addEventListener("click", () => {
  const height = inputsContainer.style.height;
  if (height == "0px") {
    inputsContainer.style.height = "auto";
  } else {
    inputsContainer.style.height = "0px";
  }
});

mainAdd.addEventListener("click", () => {
  if (label.value !== "") {
    sectors.push({ label: label.value, color: color.value });
    sectors.forEach(drawSector);
    inputsContainer.style.height = "0px";
  } else {
    return;
  }
});

let newSectors = [];

edit.addEventListener("click", () => {
  const display = editContainer.style.display;
  if (display === "none") {
    editContainer.style.display = "block";
  } else {
    editContainer.style.display = "none";
  }

  newSectors = sectors.map((item) => {
    return `<div class="edit-input-item">
      <input class='update-label' id="edit-label" type="text" value='${item.label}' />
      <input class='update-color' id="edit-color" type="color" value='${item.color}' />
    </div> `;
  });

  editsInputsContainer.innerHTML = newSectors;
});

update.addEventListener("click", () => {
  //   console.log(newSectors);
  console.log(updateLabel);
  console.log(updateColor);
});
