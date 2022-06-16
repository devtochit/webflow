import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import { sendData, getData, newgame } from './modules/api'


newgame()


const refresh = document.querySelector('.refresh-list');
refresh.addEventListener('click', getData);



const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = document.querySelector('#add-list').value;
  const score = document.querySelector('#add-score').value;
  return sendData({ value, score })
});

//   //drag and drop event listeners
const form = document.querySelector('#list-form');





