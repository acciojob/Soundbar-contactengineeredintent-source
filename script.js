let currentAudio = null;
document.querySelector(".appluaseBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioAppluase = new Audio("Sounds/driken5482-applause-236785.mp3");
  audioAppluase.play();
  currentAudio = audioAppluase;
});

document.querySelector(".booBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioBoo = new Audio("Sounds/driken5482-applause-236785.mp3");
  audioBoo.play();
  currentAudio = audioBoo;
});

document.querySelector(".gaspBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioGasp = new Audio("Sounds/driken5482-applause-236785.mp3");
  audioGasp.play();
  currentAudio = audioGasp;
});

document.querySelector(".tadaBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioTada = new Audio("Sounds/driken5482-applause-236785.mp3");
  audioTada.play();
  currentAudio = audioTada;
});

document.querySelector(".victoryBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioVictory = new Audio("Sounds/driken5482-applause-236785.mp3");
  audioVictory.play();
  currentAudio = audioVictory;
});

document.querySelector(".wrongBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioWrong = new Audio("Sounds/driken5482-applause-236785.mp3");
  audioWrong.play();
  currentAudio = audioWrong;
});

document.querySelector(".stop").addEventListener("click",(event)=>{
  event.preventDefault();
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
});

