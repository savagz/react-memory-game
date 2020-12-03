import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endGameAction, updateItemAction } from '../../actions/gameActions';
import Swal from 'sweetalert2';

import { Item } from './Item';
import { Options } from './Options';
import { Score } from './Score';

export const Board = () => {
    
    const dispatch = useDispatch();
    const updateItem = (_item) => dispatch( updateItemAction(_item)  );
    const endGame = () => dispatch( endGameAction() );

    const game = useSelector( state => state.game );
    const { items, select, itemp1, itemp2, score, event } = game;

    useEffect(() => {
        if(select === 2){
            if(itemp1.id !== itemp2.id && itemp1.item === itemp2.item){
                updateItem(itemp2.item);
            }
        }
        // eslint-disable-next-line 
    }, [select]);

    useEffect(() => {
        if( items.length>0 && !items.find(itm => itm.enable) ){
            endGame();
        }
        // eslint-disable-next-line 
    }, [items]);
    
    useEffect(() => {
        if(event==="GAME_OVER"){
            Swal.fire({
                title: 'Game Over !',
                text: `Your Final Score: ${score}`,
                icon: 'success'
            }).then((result) => {
                
            });
        }
        // eslint-disable-next-line 
    }, [event]);

    return (
        <div className="board">
            {
                items.map( item => (
                    <Item
                        key={item.id}
                        { ...item }
                    />    
                ))
            }
            {
                items.length===0 && <div className="welcome"></div>
            }
            <Score />
            <Options />
        </div>
    )
}
