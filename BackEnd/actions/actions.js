import * as types from './actionTypes.js';



export const characterFilter = characters => {
    return ({
        type: types.CHARACTER_FILTER,
        payload: characters
    })
};

export const addFavorite = character => {
    return ({
        type: types.ADD_FAVORITES,
        payload: character
    })
};

export const deletefavorite = character => {
    return ({
        type: types.DELETE_FAVORITES,
        payload: character
    })
};