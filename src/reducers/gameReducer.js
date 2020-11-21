import { LOAD_GAME, START_GAME, RESET_GAME, END_GAME, SELECT_ITEM_P1, SELECT_ITEM_P2, UPDATE_ITEM, UPDATE_MOVE } from '../types'

const initialState = {
    event: 'STOP',
    select: 0,
    itemp1: { id:0, item:0 },
    itemp2: { id:0, item:0 },
    score: 0,
    moves: 0,
    items: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAME:
            return {
                ...state,
                items: action.payload
            };

        case START_GAME:
        case RESET_GAME:
            return {
                ...state,
                select: 0,
                itemp1: { id:0, item:0 },
                itemp2: { id:0, item:0 },
                score: 0,
                moves: 0,
                event: 'START'
            };

        case END_GAME:
            return {
                ...state,
                event: 'GAME_OVER'
            };
            
        case SELECT_ITEM_P1:
            return {
                ...state,
                select: action.payload.select,
                itemp1: { id:action.payload.id, item:action.payload.position },
                itemp2: { id:0, item:0 }
            };
            
        case SELECT_ITEM_P2:
            return {
                ...state,
                select: action.payload.select,
                itemp2: { id:action.payload.id, item:action.payload.position },
                score: state.score>0 ? state.score-1 : 0 
            };
            
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map(itm => itm.item === action.payload ? {...itm, enable:false} : itm),
                score: state.score + 10
            };
            
        case UPDATE_MOVE:
            return {
                ...state,
                moves: state.moves+1
            };
            
        default:
            return state;
    }
}