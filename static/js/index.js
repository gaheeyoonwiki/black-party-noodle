const Emotion = {
  POSITIVE: 0,
  NEGATIVE: 1,
};

const images = {
  positive: [
    "https://media.istockphoto.com/photos/perfect-sky-and-ocean-picture-id467367026",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80",
  ],
  negative: [
    "https://media.istockphoto.com/photos/dark-stormy-sea-with-a-dramatic-cloudy-sky-picture-id1281863832",
    "https://media.istockphoto.com/photos/north-sea-oilrig-storm-picture-id185057445",
  ],
};

const mainImage = document.getElementById("mainImage");

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeImage(imageList) {
  while (true) {
    const randIndex = getRandomArbitrary(0, imageList.length);
    console.log(randIndex);
    if (imageList[randIndex] === mainImage.src) {
      continue;
    } else {
      mainImage.src = imageList[randIndex];
      break;
    }
  }
}

// 이미지를 새로고침한다. 주기적 호출
function refreshImage() {
  console.log("refresh image");
  const emotion = getEmotion();

  switch (emotion) {
    case Emotion.POSITIVE:
      changeImage(images.positive);
      break;
    case Emotion.NEGATIVE:
      changeImage(images.negative);
      break;
  }
}

function getEmotion() {
  // 현재 감정상태를 가져온다.
  // 감정 API 호출 후 결과 return
  return Emotion.POSITIVE;
}

function init() {
  setInterval(refreshImage, 3000);
  //refreshImage();
}

init();
