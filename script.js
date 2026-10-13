//your JS code here. If required.
let currentAudio = null;
document.querySelector(".appluaseBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioAppluase = new Audio("xyz");
  audioAppluase.play();
  currentAudio = audioAppluase;
});

document.querySelector(".booBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioBoo = new Audio("xyz");
  audioBoo.play();
  currentAudio = audioBoo;
});

document.querySelector(".gaspBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioGasp = new Audio("xyz");
  audioGasp.play();
  currentAudio = audioGasp;
});

document.querySelector(".tadaBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioTada = new Audio("xyz");
  audioTada.play();
  currentAudio = audioTada;
});

document.querySelector(".victoryBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioVictory = new Audio("xyz");
  audioVictory.play();
  currentAudio = audioVictory;
});

document.querySelector(".wrongBtn").addEventListener("click",(event)=>{
  event.preventDefault();
  let audioWrong = new Audio("xyz");
  audioWrong.play();
  currentAudio = audioWrong;
});

document.querySelector(".stop").addEventListener("click",(event)=>{
  event.preventDefault();
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
});

