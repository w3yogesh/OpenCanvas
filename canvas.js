let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//api
let tool = canvas.getContext("2d"); 

tool.strokeStyle = "red" // Set stroke color
tool.lineWidth = "10" // set line width (thikness)


tool.beginPath(); // new graphic (path) (line)
tool.moveTo(0,0); //  Starting point of line
tool.lineTo(100,250) // End point of the line
tool.stroke(); // Fill color 