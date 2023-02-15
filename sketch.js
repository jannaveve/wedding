var gif_createImg2, gif_createImg;
function preload() {
  //gif_createImg2 = createImg("img/heart3.gif");
  gif_createImg = createImg("img/heart4.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //gif_createImg2.position(mouseX, mouseY);
  gif_createImg.position(mouseX, mouseY + 5220);
  print(gif_createImg.position());
}
