console.log('Hello World');
function playFun() {
  const homeSec = document.getElementById('hemeSection');
  homeSec.className = 'hidden';
  //   or
  //   homeSec.classList.add('hidden');
  const playGroundSec = document.getElementById('playGround');
  playGroundSec.classList.remove('hidden');
  //   PlayGround Page Random Alpha Text
  const displayAlpha = document.getElementById('displayAlpha');
  displayAlpha.innerText = randomAlpha().toUpperCase();
  //   Playground page keyboard bg color
  bgColor(displayAlpha.innerText.toLowerCase());
}

// Button
document.getElementById('btnPlay').addEventListener('click', function () {
  playFun();
});
// Enter
document.addEventListener('keyup', keyEnterCall);
function keyEnterCall(e) {
  const pMass = document.getElementById('enterMass');
  const homeSec = document.getElementById('hemeSection');
  const home = homeSec.classList.contains('hidden');
  if (e.key === 'Enter' && home !== true) {
    playFun();
  } else {
    pMass.style.color = 'red';
    // document.getElementById('life').innerText = '3';
    // document.getElementById('displayAlpha').style.color = '#010313';
  }
}

// function gameGroundPage() {
document.addEventListener('keyup', keyUpCall);
function keyUpCall(e) {
  const key = e.key;
  const displayAlpha = document.getElementById('displayAlpha');
  const display = displayAlpha.innerText.toLowerCase();
  if (key !== 'Enter') {
    if (key === display || key.toUpperCase() === displayAlpha) {
      displayAlpha.style.color = '#010313';
      bgColorRemove(displayAlpha.innerText.toLowerCase());
      scoreCall();
      displayAlpha.innerText = randomAlpha().toUpperCase();
      bgColor(displayAlpha.innerText.toLowerCase());
    } else {
      displayAlpha.style.color = 'red';
      lifeUp();
      removeScore();
      gameOver();
    }
  }
}

// Random Alphabet create function
function randomAlpha() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  //   Convert array
  const alphaArr = alphabets.split('');
  //   Create random index
  const indexCreate = Math.random() * 25;
  const index = Math.round(indexCreate);
  // Set alpha array index and call
  const randomAlpha = alphaArr[index];
  return randomAlpha;
}

// Alpha Bg Color change Function
function bgColor(name) {
  const idName = document.getElementById(name);
  idName.classList.add('bg-[#FFA500]');
}
// // Alpha Bg Color change Function
// function bgKeyColor(name) {
//   const idName = document.getElementById(name);
//   idName.classList.add('active:bg-[#002B36]');
//   idName.classList.add('active:active-[#ffffff]');
// }
// Alpha Bg Color Remove Function
function bgColorRemove(name) {
  const idName = document.getElementById(name);
  idName.classList.remove('bg-[#FFA500]');
}

// add score function
function scoreCall() {
  const scoreUp = document.getElementById('score');
  const scoreText = parseInt(scoreUp.innerText);
  scoreUp.innerText = scoreText + 1;
}

// down score function
function removeScore() {
  const scoreUp = document.getElementById('score');
  const scoreText = parseInt(scoreUp.innerText);
  scoreUp.innerText = scoreText - 1 >= 0 ? scoreText - 1 : scoreText;
}

// Live upping function
function lifeUp() {
  const life = document.getElementById('life');
  const lifeText = parseInt(life.innerText);
  life.innerText = lifeText - 1;
}

function gameOver() {
  const playGroundSec = document.getElementById('playGround');
  const gameOverSec = document.getElementById('gameOver');
  const life = document.getElementById('life');
  const lifeNum = parseInt(life.innerText);
  // console.log(life);
  if (lifeNum === 0) {
    playGroundSec.classList.add('hidden');
    gameOverSec.classList.remove('hidden');
  }
  finalScore();
  document.getElementById('playAgin').addEventListener('click', function () {
    playAgin();
  });
}
function finalScore() {
  const finalScore = document.getElementById('finalScore');
  const scoreUp = document.getElementById('score').innerText;
  // console.log(scoreUp);
  finalScore.innerText = scoreUp;
}

function playAgin() {
  const gameOverSec = document.getElementById('gameOver');
  gameOverSec.classList.add('hidden');
  const home = document.getElementById('hemeSection');
  home.classList.remove('hidden');
  document.getElementById('score').innerText = '0';
  document.getElementById('life').innerText = '3';
  const display = document
    .getElementById('displayAlpha')
    .innerText.toLowerCase();
  bgColorRemove(display);
  displayAlpha.style.color = '#010313';
  document.getElementById('enterMass').style.color = '#fff';
  document.getElementById('hemeSection').style.textAlign = 'center';
}
