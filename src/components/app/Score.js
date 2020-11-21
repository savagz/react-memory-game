import React from 'react'
import { useSelector } from 'react-redux';

export const Score = () => {

    const game = useSelector( state => state.game );
    const { score, moves } = game;

    return (
        <div>
            { `Score: ${score} - Moves: ${moves}` }
        </div>
    )
}
