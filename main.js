Webcam.set({
width:350,
height:300,
image_format:'png',png_quality:90
});
c1=document.getElementById("camera");
Webcam.attach(c1);

function takephoto(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="myimg" src="'+data_uri+'"/>';
}
    );
}

console.log("ml5 version:",ml5.version)
myModel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IlaE8BKkv/model.json",modelLoaded)
