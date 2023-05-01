let painting = false;
let startPoint = { x: undefined, y: undefined };

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const restoreBtn = document.querySelector(".restore");
const saveBtn = document.querySelector(".save");

canvas.onmousedown = (e) => {
  painting = true;
  startPoint.x = e.offsetX;
  startPoint.y = e.offsetY;
};

canvas.onmousemove = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  if (painting) {
    drawLine(startPoint.x, startPoint.y, x, y);
    startPoint = { x, y };
  }
};

canvas.onmouseup = () => {
  painting = false;
};

const drawLine = (xStart, yStart, xEnd, yEnd) => {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  ctx.closePath();
};

restoreBtn.addEventListener("click", () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener("click", () => {
  const url = canvas.toDataURL("image/jpg");
  const a = document.createElement("a");
  a.href = url;
  a.download = "canvas";
  a.target = "_blank";
  a.click();
});
