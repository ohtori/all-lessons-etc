// const canvas = document.getElementById('canvas');
// /** @type {CanvasRenderingContext2D} */
// const ctx = canvas.getContext('2d');

// let zeroMark = Math.PI*2*3/4;

// function drawDiagramElem(centerX, centerY, radius, startAngle, endAngle, color){
//   ctx.fillStyle = color;
//   ctx.beginPath();
//   ctx.moveTo(centerX, centerY);
//   ctx.arc(centerX,centerY,radius, startAngle, endAngle);
//   ctx.fill();
//   zeroMark = endAngle;
// }
// drawDiagramElem(150, 150, 150, zeroMark, zeroMark + Math.PI*2 * 80/100, '#ff0000');
// drawDiagramElem(150, 150, 150, zeroMark, zeroMark + Math.PI*2 * 10/100, '#326dac');
// drawDiagramElem(150, 150, 150, zeroMark, zeroMark + Math.PI*2 * 10/100, '#987aef');
// const arr = [[0, 450], [50, 400], [100, 350], [150, 370], [200, 480], [250, 315], [300, 78], [350, 80], [400, 370], [500, 300]];

// ctx.strokeStyle = '#3912ea';
// ctx.fillStyle = 'rgba(39, 12, 200, 0.5)';
// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.moveTo(0, 500);
// arr.forEach(point => ctx.lineTo(point[0], point[1]));
// ctx.lineTo(500, 500);
// ctx.stroke();
// ctx.fill();

// ctx.lineWidth = 3;
// ctx.fillStyle = '#fff';
// arr.forEach(point => {
//   ctx.beginPath();
//   ctx.arc(point[0], point[1], 5, 0, Math.PI *2);
//   ctx.closePath();
//   ctx.stroke();
//   ctx.fill();
// });
