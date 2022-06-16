import axios from 'axios'
export const GAME_ID = 'B9I6OaxhqWCQtc0Fe7m';
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';




// export const api = axios.create({
//     baseURL: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
// })

// export const createGame = async (gameName) => {
//     const response = await api.post('/games', {
//         name: gameName
//     });
//     return console.log(response.data.result.slice(15, 34))
// }

export const newgame = () => {
    fetch(`${api}/games/`, {
        method: 'POST',
        body: JSON.stringify({
            name: 'Jesse ',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};



export const sendData = async (data = {}) => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B9I6OaxhqWCQtc0Fe7m/scores/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const value = document.querySelector('#add-list');
    const score = document.querySelector('#add-score');
    value.value = '';
    score.value = '';
};




const ulList = document.getElementById('dynamic-list');

const sortScores = (result) => {
    const scores = [];
    result.map((item) => scores.push(item.score));
    return scores.sort((a, b) => b - a);
};

const getScoresWithNames = (result, sortedScores) => {
    const finalResult = [];
    sortedScores.map((score) => result.map((item) => (item.score === score
        ? finalResult.push({ user: item.user, score })
        : false)));
    return finalResult;
};

export const getGameScores = async () => {
    const response = await api.get(`/games/${GAME_ID}/scores`);
    return response.data.result;
};

export const getData = async () => {
    const local = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B9I6OaxhqWCQtc0Fe7m/scores');
    const toDoLists = local.json()
    return toDoLists.then((data) => {
        ulList.innerHTML = '';
        //sort scores 
        const sortedScores = sortScores(data.result);
        const finallData = getScoresWithNames(data.result, sortedScores);
        // Display result 
        return finallData.length ? finallData.map((item, index) => {
            console.log(item.value)
            if (index == 0) {
                ulList.innerHTML += ` 
                          <li id="${index}" class = "todo-list" >
                            <div class="list">
          
                              <label for="${index}">${item.value}:${item.score}</label>
                            </div>
                            <button type="button" id= "${index}" class="deleteList">
                            <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </li>  
                            `;
            } else {
                ulList.innerHTML += ` 
        <li id="${index}" class = "todo-list" >
          <div class="list">

            <label for="${index}">${item.value}:${item.score}</label>
          </div>
          <button type="button" id= "${index}" class="deleteList">
          <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>  
          `;
            }

        }) : finallData

    })
}


