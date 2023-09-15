
const rainyBtn = document.getElementById("rainy-btn");
const summerBtn = document.getElementById("summer-btn");
const winterBtn = document.getElementById("winter-btn");

const rainyAudio = document.getElementById("rainy-audio");
const summerAudio = document.getElementById("summer-audio");
const winterAudio = document.getElementById("winter-audio");

const volume = document.getElementById("volume");

const isPlay = {
  rainy: false,
  summer: false,
  winter: false,
};

function playNoise(season) {
  switch (season) {
    case "rainy":
      summerAudio.pause();
      winterAudio.pause();
      
      isPlay.rainy = !isPlay.rainy;
      if (isPlay.rainy) {
        document.body.style.backgroundImage = "url('./assets/rainy-bg.jpg')"  
        rainyBtn.style.border = 'solid 4px white'      
        rainyAudio.play();
        isPlay.summer = false;
        isPlay.winter = false;
        summerBtn.style.border = 'solid 1px white'
        winterBtn.style.border = 'solid 1px white'
      } else {
        rainyBtn.style.border = 'solid 1px white'
        rainyAudio.pause();
      }
      break;
    case "summer":
      rainyAudio.pause();
      winterAudio.pause();

      isPlay.summer = !isPlay.summer;
      if (isPlay.summer) {
        document.body.style.backgroundImage = "url('./assets/summer-bg.jpg')"
        summerBtn.style.border = 'solid 4px white'
        summerAudio.play();
        isPlay.rainy = false;
        isPlay.winter = false;
        rainyBtn.style.border = 'solid 1px white'
        winterBtn.style.border = 'solid 1px white'
      } else {
        summerBtn.style.border = 'solid 1px white'
        summerAudio.pause();
      }
      break;
    case "winter":
      rainyAudio.pause();
      summerAudio.pause();

      isPlay.winter = !isPlay.winter;
      if (isPlay.winter) {
        document.body.style.backgroundImage = "url('./assets/winter-bg.jpg')"
        winterBtn.style.border = 'solid 4px white'
        winterAudio.play();
        isPlay.rainy = false;
        isPlay.summer = false;
        rainyBtn.style.border = 'solid 1px white'
        summerBtn.style.border = 'solid 1px white'

      } else {
        winterBtn.style.border = 'solid 1px white'
        winterAudio.pause();
      }
      break;

    default:
      break;
  }
}

function clearPlay() {
  isPlay = Object.fromEntries(
    Object.entries(isPlay).map(([key, value]) => [key, false])
  );
}

rainyBtn.addEventListener("click", () => {
  playNoise("rainy");
});

summerBtn.addEventListener("click", () => {
  playNoise("summer");
});

winterBtn.addEventListener("click", () => {
  playNoise("winter");
});

volume.addEventListener("input", (event) => {
  volume.textContent = event.target.value;
  rainyAudio.volume = +volume.textContent;
  summerAudio.volume = +volume.textContent;
  winterAudio.volume = +volume.textContent;

});
