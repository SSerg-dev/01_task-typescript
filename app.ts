const rainyBtn = <HTMLElement>document.getElementById("rainy-btn");
const summerBtn = <HTMLElement>document.getElementById("summer-btn");
const winterBtn = <HTMLElement>document.getElementById("winter-btn");

const rainyAudio = <HTMLVideoElement>document.getElementById("rainy-audio");
const summerAudio = <HTMLVideoElement>document.getElementById("summer-audio")!;
const winterAudio = <HTMLVideoElement>document.getElementById("winter-audio");

const volume = <HTMLElement>document.getElementById("volume");

const isPlay = {
  rainy: false,
  summer: false,
  winter: false,
};

function playNoise(season: string): void {
  switch (season) {
    case "rainy":
      summerAudio.pause();
      winterAudio.pause();

      isPlay.rainy = !isPlay.rainy;
      if (isPlay.rainy) {
        document.body.style.backgroundImage = "url('./assets/rainy-bg.jpg')";
        rainyBtn.style.border = "solid 4px white";
        rainyAudio.play();
        isPlay.summer = false;
        isPlay.winter = false;
        // clearPlay()
        summerBtn.style.border = "solid 1px white";
        winterBtn.style.border = "solid 1px white";
      } else {
        rainyBtn.style.border = "solid 1px white";
        rainyAudio.pause();
      }
      break;
    case "summer":
      rainyAudio.pause();
      winterAudio.pause();

      isPlay.summer = !isPlay.summer;
      if (isPlay.summer) {
        document.body.style.backgroundImage = "url('./assets/summer-bg.jpg')";
        summerBtn.style.border = "solid 4px white";
        summerAudio.play();
        isPlay.rainy = false;
        isPlay.winter = false;
        // clearPlay()
        rainyBtn.style.border = "solid 1px white";
        winterBtn.style.border = "solid 1px white";
      } else {
        summerBtn.style.border = "solid 1px white";
        summerAudio.pause();
      }
      break;
    case "winter":
      rainyAudio.pause();
      summerAudio.pause();

      isPlay.winter = !isPlay.winter;
      if (isPlay.winter) {
        document.body.style.backgroundImage = "url('./assets/winter-bg.jpg')";
        winterBtn.style.border = "solid 4px white";
        winterAudio.play();
        isPlay.rainy = false;
        isPlay.summer = false;
        // clearPlay()
        rainyBtn.style.border = "solid 1px white";
        summerBtn.style.border = "solid 1px white";
      } else {
        winterBtn.style.border = "solid 1px white";
        winterAudio.pause();
      }
      break;

    default:
      break;
  }
}

// function clearPlay() {
//   isPlay = Object.fromEntries(
//     Object.entries(isPlay).map(([key, value]) => [key, false])
//   );
// }

rainyBtn.addEventListener("click", () => { 
  playNoise("rainy");
});

summerBtn.addEventListener("click", () => {
  playNoise("summer");
});

winterBtn.addEventListener("click", () => {
  playNoise("winter");
});

volume.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  volume.textContent = target.value;
  rainyAudio.volume = +volume.textContent!;
  summerAudio.volume = +volume.textContent!;
  winterAudio.volume = +volume.textContent!;
});
