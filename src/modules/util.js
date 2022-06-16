import List from './List.js';
import { sendData } from './api.js';

const nameValue = document.querySelector('.add-list');
const scoreValue = document.querySelector('.add-score');

export const getInputData = () => {      // eslint-disable-line
  if (nameValue.value && scoreValue.value) {
    const newUser = new List(nameValue.value, scoreValue.value);
    sendData(newUser);
    nameValue.value = '';
    scoreValue.value = '';
  }
};
