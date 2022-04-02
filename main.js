video="";
status="";

function preload(){
    canvas=createCanvas(380,380);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded!");
    status = true;
    video.loop();
    video.speed(10);
    video.volume(1);
}

function draw(){
    image(video, 0 , 0 , 380 , 380);
}


function modelLoaded(){
    console.log("modelLoaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}




