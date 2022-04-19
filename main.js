LeftWristX=0;
RightWristX= 0;
totalDifference= 0;

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

    fill('blue');
    text('pranjal', 10, 200);
    textSize(totalDifference);
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);

        LeftWristX= results[0].pose.leftWrist.x;
        RightWristX= results[0].pose.rightWrist.x;
        totalDifference= Math.floor(LeftWristX-RightWristX);
        document.getElementById("update").innerHTML="The font size will be " + totalDifference + "px";

    }
}
