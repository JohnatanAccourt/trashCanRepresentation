import React from 'react';
import './styles.css';

import recicle from '../../assets/recicle.svg';

export default function TrashCanComponent({
    canColor = 'transparent', 
    stripColor = 'transparent', 
    height, width, marginTop, marginLeft,
    onClick = () => {}})
    {
    return(
        <div 
            className="TrashCan__Wrapper" 
            onClick={onClick}
            style={{height: height, width: width, marginTop: marginTop, marginLeft: marginLeft}}
        >
            <div 
                className="TrashCan__CoverWrapper"
                style={{backgroundColor: canColor}}
            >
                <div className="TrashCan__CoverInBlack"></div>
            </div>
            <div className="TrashCan__Strip" style={{backgroundColor: stripColor}}></div>
            <div 
                className="TrashCan__Body"
                style={{backgroundColor: canColor}}
            >
                <img className="TrashCan__Image" src={recicle} alt="recicle logo" />
            </div>
        </div>
    )
}