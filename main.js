Bliss = "";
Trap = "";

function preload(){
    Bliss = loadSound("Luke-Bergs-Bliss.mp3");
    Trap = loadSound("Powerful-Trap-.mp3");
}
function setup(){
      canvas = createCanvas(475,475);
      canvas.position(530,220);

      video = createCapture(VIDEO);
      video.hide();
}
function draw(){
 image(video,0,0,550,500);
}