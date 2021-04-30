import namesList from '../data/list.json';

const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const buttonsEl = document.querySelector('.buttons-wrap');
const listEl = document.querySelector('.list-wrap');
const createBtnEl = (text) => {
const buttonEl = document.createElement('button');
buttonEl.type = 'button';
buttonEl.classList.add('btn');
buttonEl.textContent = `${text}`;
return buttonEl;
}
const createUniqueButtons = () => {
  let arr = [];
  while(arr.length < 5) {
    let charIndex = randomIntegerFromInterval(0, ABC.length - 1);
    if(!arr.includes(charIndex)) {
      arr.push(charIndex);
      buttonsEl.append(createBtnEl(ABC[charIndex]));
    }
  }
}
createUniqueButtons();

const createNamesList = (elem) => {
  const namesListItemEl = document.createElement('li');
  namesListItemEl.textContent = `${elem.name}`;
  return namesListItemEl;
}

buttonsEl.addEventListener('click', (e) => {
  if(e.target.textContent.length > 1) {
    return;
  }
  listEl.innerHTML = '';
  const a = namesList.filter( elem => elem.name[0] === e.target.textContent);
  if(a.length === 0) {
    listEl.innerHTML = `<h3> Oops, no matches found for "${e.target.textContent}"</h3>`;
    // alert(`No matches found for "${e.target.textContent}"`)
  } else {
    const namesListEl = document.createElement('ul');
    listEl.insertAdjacentElement('beforeend', namesListEl);
    console.log(namesListEl);
    a.forEach(elem => {
      namesListEl.insertAdjacentElement('beforeend', createNamesList(elem));
    })

  }
})




  