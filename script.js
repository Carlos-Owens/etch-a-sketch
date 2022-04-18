const container = document.querySelector("#container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  container.style.width = "960px";
  container.style.overflow = "hidden";

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.style.minHeight = "0";
    cell.style.minWidth = "0";
    cell.style.overflow = "hidden";
    container.appendChild(cell).className = "grid-item";

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "green";
    });
  }
  resetButton();
};

function resetButton() {
const content = document.querySelector("#content");
const buttons = document.createElement("button");
buttons.textContent = "CLEAR";
buttons.style.margin = "20px";
content.appendChild(buttons);

buttons.addEventListener("click", () => {
  document.querySelectorAll(".grid-item").forEach(e => e.remove());
  let userGridInput = prompt("Enter the number of grids  per side you want (Max: 100 grids).");

  if(userGridInput > 100){
  alert("ERROR! Max grids per side is 100.");
  return;
  }
  rows = userGridInput;
  cols = userGridInput;
  makeGrid(rows, cols);
});
};

makeGrid(16, 16);