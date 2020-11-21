import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGameAction, resetGameAction } from '../../actions/gameActions';

export const Options = () => {

    const dispatch = useDispatch();
    const startGame = () => dispatch( startGameAction() );
    const resetGame = () => dispatch( resetGameAction() );

    const gameevent = useSelector( state => state.game.event );

    const handleStartButton = () => {
        startGame();
    };

    const handleResetButton = () => {
        resetGame();
    };

    return (
        <div>
            {
                gameevent!=="START" && <button onClick={ handleStartButton } >Start</button>
            } 
            {
                gameevent==="START" && <button onClick={ handleResetButton } >Reset</button>
            } 
        </div>
    )
}
