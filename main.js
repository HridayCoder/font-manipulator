RwristX=0;
LwristX=0;
difference=0;

function setup()
{
canvas=createCanvas(600,400);
canvas.position(700,200);
video=createCapture(VIDEO);
video.position(100,150);
video.size(400,400);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("model is loaded !");
}

function draw()
{
fill("#FF0000");
background("#87ceeb");
textSize(difference);
text("Hriday",10,300);
document.getElementById("display_size").innerHTML="size of the text : "+difference +" px";
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
LwristX=results[0].pose.leftWrist.x;
RwristX=results[0].pose.rightWrist.x;
difference=floor(LwristX-RwristX);
console.log("LWristX= "+LwristX +" RwristX= "+RwristX+" difference= "+difference);
}
}