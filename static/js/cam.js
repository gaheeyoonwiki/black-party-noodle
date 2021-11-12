const faceCamVideo = document.getElementById("faceCamVideo");
const btnCapture = document.getElementById("btnCapture");
const capturedImage = document.getElementById("capturedImage");

function onCaptureButtonClick(e) {
  e.preventDefault();
  const canvas = document.createElement("canvas");
  canvas.width = faceCamVideo.videoWidth;
  canvas.height = faceCamVideo.videoHeight;
  canvas
    .getContext("2d")
    .drawImage(
      faceCamVideo,
      0,
      0,
      faceCamVideo.videoWidth,
      faceCamVideo.videoHeight
    );

  capturedImage.src = canvas.toDataURL();
}

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
  btnCapture.addEventListener("click", onCaptureButtonClick);
  webCamInit();
}

init();
