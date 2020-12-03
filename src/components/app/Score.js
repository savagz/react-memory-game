import React from 'react'
import { useSelector } from 'react-redux';

export const Score = () => {

    const game = useSelector( state => state.game );
    const { score, moves, event } = game;

    return (
        <>
            {
                event!=="STOP" && 
                <div>
                    <div className="box">
                        <div className="button">{ `Score: ${score}` }</div>
                    </div>
                </div>
            } 
            {
                event!=="STOP" && 
                <div>
                    <div className="box">
                        <div className="button">{ `Moves: ${moves}` }</div>
                    </div>
                </div>
            } 
        </>
    )
}
