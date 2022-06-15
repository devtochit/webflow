import axios from 'axios'
export const GAME_ID = 'B9I6OaxhqWCQtc0Fe7m';

export const api = axios.create({
    baseURL: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
})

export const createGame = async (gameName) => {
    const response = await api.post('/games', {
        name: gameName
    });
    return response.data.result.slice(15, 34)
}

export const AddScoreToGame = async (score) => {
    await api.post(`/games/${GAME_ID}/scores`, score);
}

export const getGameScores = async () => {
    const response = await api.post(`/games/${GAME_ID}/scores`)
    return response.data.result;
}
