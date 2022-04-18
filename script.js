const container = document.querySelector("#container");

function makeGrid(rows, cols) {

  if (document.querySelector("button") !== null) {
    document.querySelector("button").remove();
}
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
      
      if(cell.style.backgroundColor === "") {
        let color = getRandomColor();
        cell.style.backgroundColor = color;
        cell.style.opacity = "0.10";
        return cell.style.backgroundColor;
      };
      if((cell.style.backgroundColor !== "") && (cell.style.opacity <= "0.90") ) {
        cell.style.opacity = parseFloat(cell.style.opacity) + .10;
        return cell.style.backgroundColor;
      }
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

function getRandomColor() {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

makeGrid(16, 16);