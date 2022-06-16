import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Sortable from 'sortablejs';
import List from './modules/List.js';

const ulList = document.getElementById('dynamic-list');
let toDoLists = [];

const viewPage = () => {
  const local = new List();
  toDoLists = local.getList();
  toDoLists.sort((a, b) => a.index - b.index);
  if (toDoLists.length) {
    ulList.innerHTML = '';
    toDoLists.forEach((list) => {
      if (list) {

        ulList.innerHTML += ` w
                        <li id="${list.index - 1}" class = "todo-list" >
                          <div class="list">
        
                            <label for="${list.index}">${list.description
          }</label>
                          </div>
                          <button type="button" id= "${list.index - 1
          }" class="deleteList">
                          <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </li>  
                          `;
      }
    });
  } else {
    ulList.innerHTML = '<li>No score to Preview. Add New !</li>';
  }

  // eventlistener for deleteBtn
  const buttons = document.querySelectorAll('.deleteList');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const localList = new List();
      const buttonId = button.getAttribute('id');
      localList.deleteList(buttonId * 1);
      viewPage();
    });
  });

  //   //drag and drop event listeners
  const form = document.querySelector('#list-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const localList = new List();
    const value = document.querySelector('#add-list');
    const score = document.querySelector('#add-score');
    // const todoListLocal = localList.getList();

    AddScoreToGame = ({
      description: ` ${value.value} : ${score.value}`,
    })
    // localList.AddScoreToGame(todoListLocal);
    value.value = '';
    score.value = '';
    viewPage();
  });
  const deleteChecked = document.querySelector('.delete-checked');
  deleteChecked.addEventListener('click', () => {
    const localList = new List();
    localList.deleteCompleted();
    viewPage();
  });


  const refresh = document.querySelector('.refresh-list');
  refresh.addEventListener('click');
}

