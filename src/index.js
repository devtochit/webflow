import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import { getData } from './modules/api.js';
import { getInputData } from './modules/util.js';

const refresh = document.querySelector('.refresh-list');
refresh.addEventListener('click', getData);

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  return getInputData();
});
