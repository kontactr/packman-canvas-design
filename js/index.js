let x = 15;
let y = 15;
let image = new Image();
let q = null;

document.addEventListener("DOMContentLoaded", e => {
  image.src = "js/pacman.png";
  image.onload = e => {
    console.log(image, "Aaa");
    q = new Packman();
    console.log(q);
  };

  animate();
});

function animate() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  //context.clearRect(0,0,canvas.width , canvas.height);

  /*if(x <= canvas.width - 20){
        x+= 1;
    }else{
        y+= 25;
        x = 15;
    }*/
  //console.log(x,y);

  //console.log(getImageData());
  setBackground(context, canvas.width, canvas.height);
  setBoundries(context);
  innerObstracles(context, canvas.width, canvas.height);

  if (q) drawPackMan(context, q.x, q.y);
  beans(context);
  requestAnimationFrame(animate);
  context.fillStyle = "white";
  //context.translate()
  /*if(q){
    console.log(q.x , q.y);
    context.translate(q.x,q.y);
    context.rotate(90 * Math.PI / 180);
    context.fillRect(0,0,27,27); 
    context.rotate(-90 * Math.PI / 180);
    context.translate(-q.x,-q.y);
}*/
}

function drawPackMan(context, x, y) {
  //context.rotate(90 * Math.PI / 180);

  context.translate(72, 26);
  context.rotate((90 * Math.PI) / 180);
  context.drawImage(image, 0, 0, 27, 27);
  context.rotate(-((90 * Math.PI) / 180));
  context.translate(-72, -26);
  //console.log(x);

  //context.rotate(-90 * Math.PI / 180);
}

function beans(context) {
  let beanData = getBeans();

  for (let k = 0; k < beanData.length; k++) {
    context.fillRect(beanData[k].x, beanData[k].y, 5, 5);
  }

  //for(let index=10 ; index<=x; index++){
  //    for(let index1 = 10 ; index1<=y ; index1++)
  //context.fillRect(30,26,5,5);

  //}
}

function innerObstracles(context, width, height) {
  context.beginPath();

  context.fillStyle = "blue";
  context.strokeStyle = "green";
  context.moveTo(110, 50);

  //context.fillRect(110,50,5,5);

  context.strokeRect(110, 50, 70, 130);

  context.strokeStyle = "red";
  context.moveTo(250, 93);
  //context.fillRect(225,65,5,5);
  context.strokeRect(225, 65, 100, 100);

  context.strokeStyle = "yellow";
  context.strokeRect(250, 90, 50, 50);

  context.moveTo(370, 90);
  //context.fillRect(370,65,5,5);
  context.strokeRect(370, 65, 100, 100);

  context.strokeStyle = "red";
  context.strokeRect(395, 90, 50, 50);

  context.moveTo(520, 50);

  //context.fillRect(520,50,5,5);
  context.strokeStyle = "aqua";
  context.strokeRect(520, 50, 70, 130);

  context.moveTo(630, 60);
  //context.fillRect(630,60,5,5);
  context.strokeStyle = "brown";
  context.strokeRect(640, 70, 25, 10);

  context.moveTo(620, 115);
  context.strokeStyle = "aqua";
  //context.fillRect(620,115,5,5);

  context.strokeStyle = "blue";
  context.strokeRect(630, 115, 45, 10);

  context.moveTo(630, 170);

  //context.fillRect(630,170,5,5);

  context.strokeStyle = "aqua";
  context.strokeRect(640, 160, 25, 10);

  context.strokeStyle = "black";
  context.closePath();
}

function setBackground(context, width, height) {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
}

function setBoundries(context) {
  context.beginPath();
  context.moveTo(10, 10);
  context.fillStyle = "blue";
  context.strokeStyle = "blue";

  let newWidth = canvas.width - 20;
  context.lineTo(canvas.width - 20, 10);

  let newHight = (canvas.height * 28) / 100;
  context.lineTo(newWidth, newHight);

  newWidth = canvas.width - (canvas.width * 11) / 100;
  context.lineTo(newWidth, newHight);

  newHight = newHight + (canvas.height * 10) / 100;
  context.lineTo(newWidth, newHight);

  newWidth = canvas.width - 20;
  context.lineTo(newWidth, newHight);

  newHight = newHight + (canvas.height * 20) / 100;
  context.lineTo(newWidth, newHight);

  newWidth = canvas.width - (canvas.width * 11) / 100;
  context.lineTo(newWidth, newHight);

  newHight = newHight + (canvas.height * 10) / 100;
  context.lineTo(newWidth, newHight);

  newWidth = canvas.width - 20;
  context.lineTo(newWidth, newHight);

  newHight = canvas.height - 20;
  context.lineTo(newWidth, newHight);

  newWidth = 10;
  context.lineTo(newWidth, newHight);

  newHight = canvas.height - (canvas.height * 45) / 100;
  context.lineTo(newWidth, newHight);

  newWidth = 60;
  context.lineTo(newWidth, newHight);

  context.lineTo(newWidth, newHight - 25);

  newHight = newHight - 25;
  context.moveTo(newWidth, newHight);

  newWidth = 10;
  context.lineTo(10, newHight);

  context.lineTo(10, 10);

  context.stroke();

  context.fillRect(10, 10, 5, 5);
  //context.fillRect(canvas.width - 20,10,5,5);
  context.fillRect(10, canvas.height - 20, 5, 5);
  context.fillRect(canvas.width - 20, canvas.height - 20, 5, 5);

  context.strokeStyle = "black";
  context.closePath();
}
