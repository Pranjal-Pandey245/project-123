function setup(){
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(70,150)

    canvas= createCanvas(400,400);
   canvas.position(560,150);

   posenet=ml5.poseNet(video, modelLoaded);
   posenet.on('pose', gotposes);
}

function draw(){
    background('grey');
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
