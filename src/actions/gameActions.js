import { getInitialItems } from '../helpers/data';
import { LOAD_GAME, START_GAME, RESET_GAME, END_GAME, SELECT_ITEM_P1, SELECT_ITEM_P2, UPDATE_ITEM, UPDATE_MOVE } from '../types'

export const startGameAction = () => {
    return (dispatch) => {
        dispatch( loadGame(getInitialItems()) );
        dispatch( startGame() );
    }    
};

export const resetGameAction = () => {
    return (dispatch) => {
        dispatch( loadGame(getInitialItems()) );
        dispatch( resetGame() );
    }    
}

export const endGameAction = () => {
    return (dispatch) => {
        dispatch( endGame() );
    }    
}

export const selectItemAction = (selected, id, item) => {
    return (dispatch) => {
        dispatch( selectItem(selected, id, item) );
        selected === 2 && dispatch( updateMove() );
    }    
}

export const updateItemAction = (item) => {
    return (dispatch) => {
        dispatch( updateItem(item) );
    }    
}

// Actions Dispatch //

const loadGame = (items) => ({
    type: LOAD_GAME,
    payload: items
});

const startGame = () => ({
    type: START_GAME
});

const resetGame = () => ({
    type: RESET_GAME
});

const endGame = () => ({
    type: END_GAME
});

const selectItem = (select, id, position) => ({
    type: select===1 ? SELECT_ITEM_P1 : SELECT_ITEM_P2,
    payload: {
        select,
        id,
        position
    }
});

const updateMove = () => ({
    type: UPDATE_MOVE
});

const updateItem = (item) => ({
    type: UPDATE_ITEM,
    payload: item
});