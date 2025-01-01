let streaming = false;

let video = document.getElementById('video');
let video2 = document.getElementById('video2');

let startbutton = document.getElementById('startbutton');
let stream = 0;

navigator.mediaDevices.getUserMedia({ video: { width: 720, height: 720, facingMode: "environment"}, audio: false })
.then(function(stream) {

    video2.srcObject = stream;
    video2.play();

    video.srcObject = stream;
    video.play();
})
.catch(function(err) {
    console.log("An error occurred: " + err);
});


function pause() {
    video.pause();
    video2.pause();

    video.srcObject.getTracks().forEach(function(track) {
        track.stop();
    });
}