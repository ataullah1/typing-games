console.log('Hello World');

document.getElementById('btnPlay').addEventListener('click', function () {
  const homeSec = document.getElementById('hemeSection');
  homeSec.className = 'hidden';
  //   or
  //   homeSec.classList.add('hidden');

  //   PlayGround Page Random Alpha Text
  const displayAlpha = document.getElementById('displayAlpha');
  displayAlpha.innerText = randomAlpha().toUpperCase();

  //   Playground page keyboard bg color
  bgColor(displayAlpha.innerText.toLowerCase());
});
// First page enter click then game start, function
function keyUpCall(e) {
  if (e.key === 'Enter') {
    const homeSec = document.getElementById('hemeSection');
    homeSec.className = 'hidden';
    const playGroundSec = document.getElementById('playGround');
    playGroundSec.classList.remove('hidden');
  }
}

function keyUpCall(e) {
  
}
document.addEventListener('keyup', keyUpCall);

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
