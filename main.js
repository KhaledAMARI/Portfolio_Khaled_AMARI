const controlsContainer = document.querySelector('[data-controls-container]');
let controlBtns = document.querySelectorAll('[data-control]');

window.addEventListener('load', startInteractions());

function startInteractions() {
  controlBtns.forEach(btn => btn.addEventListener("click", handleClick));
};

function handleClick(e) {
  document.querySelector('.active-btn').classList.remove('active-btn');
  e.target.classList.add('active-btn');
};
