const controlsContainer = document.querySelector('[data-controls-container]');
const controlBtns = document.querySelectorAll('[data-control]');
const allSections = document.querySelectorAll('[ data-section]');
const switchThemBtn = document.querySelector('[data-switch-theme]');

window.addEventListener('load', startInteractions());

function startInteractions() {
  controlBtns.forEach(btn => btn.addEventListener("click", handleClickControls));
  switchThemBtn.addEventListener('click', handleClickSwitchTheme)
};

function handleClickControls(e) {
  document.querySelector('.active-btn').classList.remove('active-btn');
  e.target.classList.add('active-btn');
  allSections.forEach(section => {
    if (e.target.dataset.control === section.id) {
      section.classList.add('active');
      section.classList.remove('hide');
    } else {
      section.classList.remove('active');
      section.classList.add('hide');
    };
  });
};

function handleClickSwitchTheme() {
  let body = document.body;
  body.classList.toggle('light-mode');
};
