import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemAction } from '../../actions/gameActions';

export const Item = ({id, enable, item}) => {

    // Dispatch
    const dispatch = useDispatch();
    const selectItem = (selected, idpos, item) => dispatch( selectItemAction(selected, idpos, item) );

    const select = useSelector( state => state.game.select );

    // Local useState
    const [divclass, setDivclass] = useState('board-item flip');

    // UseEffects
    useEffect(() => {
        enable ? setDivclass('board-item flip') : setDivclass('board-item disabled-item');
    }, [enable]);

    const handleSelectItem = () => {
        if(enable){
            let selectedpos = select === 2 ? 1 : select+1;
            selectItem(selectedpos, id, item);
        }
    }

    return (
        <div 
            className={ divclass }
            onClick={ handleSelectItem }
        >
            <div className="front"></div>
            <div className="back"></div>
            <div className={ `item memory${item}` }></div>
        </div>
    )
}
