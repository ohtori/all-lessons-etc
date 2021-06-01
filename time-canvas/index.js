const canvas = document.getElementById('time-series');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

function drawLine(startX, startY, endX, endY) {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.stroke();
}


context.strokeStyle = "#000000";

drawLine(10, canvas.height - 10, 10, 10);
drawLine(10, 10, 5, 17);
drawLine(10, 10, 15, 17);
drawLine(10, canvas.height - 10, canvas.width - 10, canvas.height - 10);