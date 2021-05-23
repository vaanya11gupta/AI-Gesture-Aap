noseX=0;
noseY=0;
difference = 0;
rightwristX =0;
leftwristX =0;

function setup() {
	video = createCapture(VIDEO);
	video.size(550,500);
	canvas = createCanvas(550,550);
	canvas.position(550,150);
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose' , gotPoses);
	
}
 function modelLoaded() {
	 console.log(' model is loaded !')
 }
function gotPoses(results){
	if(results.length > 0)
		{
			console.log(results);
			noseX= results[0].pose.nose.x;
			noseY= results[0].pose.nose.y;
		leftwristX = results[0].pose.leftWrist.x;
			rightwristX = results[0].pose.rightWrist.x;
			difference= floor(leftwristX - rightwristX);
		}
}
function draw() {
	background('black');
	fill('green')
	stroke('yellow')
	square(noseX,noseY,difference);	
	document.getElementById("size").innerHTML = "Width and Height of the square is " + difference
}