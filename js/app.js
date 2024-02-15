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
document.addEventListener('keyup', keyUpCall);
function keyUpCall(e) {
  const homeSec = document.getElementById('hemeSection');
  const home = homeSec.classList.contains('hidden');
  if (e.key === 'Enter' && home !== true) {
    playFun();
  }
}

document.addEventListener('keyup', keyUpCalls);
function keyUpCalls(e) {
  const displayAlpha = document.getElementById('displayAlpha');
  if (e.key === displayAlpha.innerText.toLowerCase()) {
    console.log('Your key click id right ');
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
