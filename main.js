
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnap(){
    Webcam.snap(function(data_uri){
document.getElementById("snapsort").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>';
    });

}


