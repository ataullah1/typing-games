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
      displayAlpha.innerText = randomAlpha().toUpperCase();
      bgColor(displayAlpha.innerText.toLowerCase());
    } else {
      displayAlpha.style.color = 'red';
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
  idName.classList.add('bg-[#2CC2D5]');
}
// Alpha Bg Color Remove Function
function bgColorRemove(name) {
  const idName = document.getElementById(name);
  idName.classList.remove('bg-[#2CC2D5]');
}
