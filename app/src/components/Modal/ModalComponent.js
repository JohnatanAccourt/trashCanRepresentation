import React, { useEffect, useState } from 'react';
import './styles.css';

import TrashCanComponent from '../TrashCan/TrashCanComponent';

import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Close from '@material-ui/icons/Close';

import cans from '../../consts/list.json';

export default function ModalComponent(
    {
        closeModal,
        onClick,
        trashColor,
        description,
        exceptions,
        stripColor,
        canColor,
        can
    }
){
    // const [canItem, setCan] = useState({});

    // useEffect(() => {
    //     nextCanPreview();
    // },[])
    
    // function nextCanPreview(){
    //     const result = cans.filter(index => index.name === can.next);
    //     console.log(result[0]);
    //     setCan(result[0]);
    //     console.log(canItem);
    // }

    return(
        <div className="Modal__container">
            <Close onClick={closeModal} style={{color: 'white', fontSize: '4rem', position: 'absolute', top: 5, right: 5}} />
            <section className="Modal__left">
                <TrashCanComponent
                    height={700} width={450} marginLeft={-120}
                    canColor={canColor} stripColor={stripColor}
                />
                <div className="Modal__wrapperInfo">
                    <h2>Lixeira</h2>
                    <strong style={{color: canColor}}>{trashColor}</strong>

                    <p>
                        {description}
                    </p>

                    <ul className="Modal__exceptions">
                        {exceptions.map((items, key) => {
                            return(
                                <li key={key}>{items}</li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <section className="Modal__right">
                <button onClick={onClick}>
                    <ArrowRight style={{color: '#222A30', fontSize: '5rem'}} />
                </button>
                <TrashCanComponent
                    height={200} width={120}
                    canColor='#732C32' stripColor='#732C32'
                />
            </section>
        </div>
    )
}