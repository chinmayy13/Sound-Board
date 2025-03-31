const sounds = [
  "Starting",
  "War",
  "Attack on Titan",
  "Season-4",
  "Shinzou Wo Sasageyo",
  "Rumbling",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();

    song.currentTime = 0;
  });
}
