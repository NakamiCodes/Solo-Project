import { type } from 'node:os';
import { characterFilter } from '../actions/actions';
import { addFavorite } from '../actions/actions';
import { deletefavorite } from '../actions/actions';

import * as types from '../actions/actionTypes';

export const initialState = {
    favotites: [],
    characterList: []
}


const characterReducer = (state = initialState, action) => {
    let characterList = [];
    let favorites = [];
    switch (action.type) {

        case types.CHARACTER_FILTER:
            characterList = state.characterList.slice(0)
            characterList.push(action.payload)
            return {
                ...state,
                characterList
            }
        case types.ADD_FAVORITES:
            favorites = state.favotites.slice(0)
            favorites.push(action.payload)
            return {
                ...state,
                favorites
            }
        default: {
            return state;
        }
    }
}

export default characterReducer