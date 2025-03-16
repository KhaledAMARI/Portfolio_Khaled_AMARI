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

function generateRandomColor() {
  const LETTERS = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += LETTERS[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createSkillElement(skill, list) {
  const element = document.createElement('div');
  element.classList.add('list-item');
  const title = document.createElement('span');
  title.classList.add('title');
  title.innerText = skill;
  const content = document.createElement('div');
  content.classList.add('content');
  list.map(el => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `${el.toUpperCase()}`
    spanElement.classList.add('skill');
    spanElement.style.backgroundColor = generateRandomColor();
    content.appendChild(spanElement);
  });
  element.appendChild(title);
  element.appendChild(content);
  return element;
}

function skillsSection() {
  const skills = {
    'Web Fundamentals': ['html5', 'css3', 'javascript', 'es6+', 'typescript'],
    'Front-End': ['React', 'Next', 'Vue', 'Vuetify', 'Material UI', 'Storybook', 'Tailwind css', 'styled Component', 'Sass', 'BEM Convention', 'D3.js', 'Redux toolkit', 'Zustand'],
    'Back-End': ['Nodejs', 'ExpressJs', 'NestJs', 'MoleculerJs'],
    'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLServer'],
    'Testing': ['Jest', 'React-Testing-Library', 'Cypress'],
    'Utilities': ['Docker', 'Git', 'Gitlab', 'Bitbucket', 'Gitea', 'Shell Scripting', 'NGinx', 'Webpack', 'Babel', 'VMs', 'VirtualBox', 'Eslint', 'Husky', 'Ubuntu', 'Windows', 'MacOS'],
    'methodology': ['Agile', 'Scrum', 'Scrumban', 'Kanban', 'Lean', 'POC', 'MVP']
  }

  const skillsSection = document.querySelector('#skills-list');
  for(const [skill, list] of Object.entries(skills)) {
    skillsSection.appendChild(createSkillElement(skill, list));
  }
}

skillsSection();
