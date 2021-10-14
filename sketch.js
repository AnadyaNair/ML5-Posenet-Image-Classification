let video;
let poseNet;
let pose;
let skeleton;
let brain;

function setup() {
  createCanvas(700, 500);
  video = createCapture(VIDEO);
  video.hide()
  let skeleton;
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
  
  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  
  brain = ml5.neuralNetwork(options);
}

function gotPoses(poses){
  // console.log(poses);
   if (poses.length > 0){
    pose = poses[0].pose;
     skeleton = poses[0].skeleton;
  }
}

function modelLoaded(){
  console.log("poseNet ready");
}

function draw() {
  translate(video.width, 0);
  scale(-1,1);
  image(video, 0, 0, video.width, video.height);
  
  
  if (pose){
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y)
    // Nose(red)
  fill("#036bfc");
  ellipse(pose.nose.x, pose.nose.y, d);
    // Blue(wrist)
  fill("black");
  ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);
  ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
    
    for (let i = 0; i < pose.keypoints.length; i++){
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      //(points(green))
      fill("black");
      ellipse(x, y, 16, 16);
    }
    
    for (let i = 0; i < skeleton.length; i++){
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(255);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
    
  }
}