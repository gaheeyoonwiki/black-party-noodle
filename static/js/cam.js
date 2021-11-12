const faceCamVideo = document.getElementById("faceCamVideo");

function webCamInit() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        faceCamVideo.srcObject = stream;
      })
      .catch(function (errr) {
        console.log("Something went wrong!");
      });
  }
}

function init() {
  webCamInit();
}

init();
