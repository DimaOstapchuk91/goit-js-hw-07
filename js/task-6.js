const getInput = document.querySelector('.js-input-controls');

const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', createObjects);

const destroyBtn = document.querySelector('.destroy');
destroyBtn.addEventListener('click', destroyObjekts);

const createBox = document.querySelector('#boxes');

function createObjects() {
  const inputValue = getInput.value;
  createBoxes(inputValue);
  getInput.value = '';
}

function destroyObjekts() {
  destroyBoxes();
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    console.log('Your number does not meet the condition!');
    alert('Your number does not meet the condition!');
    return;
  }
  let boxSize = 20;
  let addBox = ``;
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    addBox += `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
  }
  createBox.innerHTML = addBox;
}

function destroyBoxes() {
  createBox.innerHTML = ``;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
