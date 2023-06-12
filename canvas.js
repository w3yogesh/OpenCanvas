let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");
let download = document.querySelector(".download");

let penColor = "red";
let eraserColor = "white";
let pencilWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;


let mouseDown = false;

//api
let tool = canvas.getContext("2d"); 

tool.strokeStyle = "red"; // Set stroke color
tool.lineWidth = pencilWidth; // set line width (thikness)

/*
        tool.beginPath(); // new graphic (path) (line)
        tool.moveTo(0,0); //  Starting point of line
        tool.lineTo(100,250) // End point of the line
        tool.stroke(); // Fill color 
*/

// mousedown -> start new path
// mousemove -> path fill

canvas.addEventListener("mousedown", (e) =>{
    mouseDown = true;
    tool.beginPath({
        x: e.clientX,
        y: e.clientY
    }); // Create new graphic
})

canvas.addEventListener("mousemove", (e) => {
    if(mouseDown) drawStroke({
        x: e.clientX,
        y: e.clientY,
        color: eraserFlag ? eraserColor : penColor,
        width: eraserFlag ? eraserWidth : penWidth
    });
})

canvas.addEventListener("mouseup", (e) => {
    mouseDown = false;
})

function beginPath(strokeObj){
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj){
    tool.strokeStyle = strokeObj.color,
    tool.lineWidth = strokeObj.width;
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}

pencilColor.forEach((colorElem) => {
    colorElem.addEventListener("click", (e) => {
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})

pencilWidthElem.addEventListener("change", (e) => {
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})

eraserWidthElem.addEventListener("change", (e) => {
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})

eraser.addEventListener("click", (e) => {
    if(eraserFlag){
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    }
    else{
        tool.strokeStyle = penColor;
        tool.lineWidth = penWidth;
    }
})

download.addEventListener("click", (e) => {
    let url = canvas.toDataURL();

    let a = document.createElement("a");
    a.href =  url;
    a.download = "board.jpg";
    a.click();
})