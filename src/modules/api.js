export const GAME_ID = 'C1VRLg8Jb50advt7iDv5';
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const newgame = () => {
  fetch(`${api}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Jesse ',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const sendData = async (userScore) => {
  const newScore = await fetch(`${api}games/${GAME_ID}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: userScore.name, score: userScore.score }),
  });
  return newScore;
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
  const local = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/C1VRLg8Jb50advt7iDv5/scores/');
  const toDoLists = local.json();

  return toDoLists.then((data) => {
    ulList.innerHTML = '';
    // sort scores
    const sortedScores = sortScores(data.result);
    const finallData = getScoresWithNames(data.result, sortedScores);
    // Display result

        return finallData.length ? finallData.map((item, index) => {      // eslint-disable-line

      if (index === 0) {
        ulList.innerHTML += ` 
                          <li id="${index}" class = "todo-list" >
                            <div class="list">
          
                              <label for="${index}">${item.value}:${item.score}</label>
                            </div>
                           
                          </li>  
                            `;
      } else {
        ulList.innerHTML += ` 
        <li id="${index}" class = "todo-list" >
          <div class="list">

            <label for="${index}">${item.user}:${item.score}</label>
          </div>
       
        </li>  
          `;
      }
    }) : finallData;
  });
};
