import React, { useState } from 'react';
import TrashCanComponent from '../TrashCan/TrashCanComponent';
import ModalComponent from '../Modal/ModalComponent';

import ArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Location from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';

import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';

import SVG from '../../assets/bottom.svg';

import cans from '../../consts/list.json';

import './styles.css';

export default function MainComponent(){
    const [modal, setModal] = useState(false);
    const [item, setItem] = useState({});

    function handleModal(can){
        setModal(true);
        setItem(can);
    }

    function nextCan(){
        const result = cans.filter(index => index.name === item.next);
        console.log(result);
        setItem(result[0]);
    }

    return(
        <div>
            {modal ?
                <ModalComponent 
                    onClick={() => nextCan()}
                    closeModal={() => setModal(false)}
                    can={item}
                    trashColor={item.name}
                    description={item.description}
                    exceptions={item.cannotThrow}
                    stripColor={item.stripColor}
                    canColor={item.canColor}
                />:
                <></>
            }
            <div className="Main__content">
                <h1>Afinal, o que significa cada cor?</h1>
                <section className="Main__cans">
                    {cans.map((can, key) => {
                        return (
                            <TrashCanComponent 
                                key={key}
                                onClick={() => handleModal(can)} 
                                height={300} width={200} marginTop={100} 
                                canColor={can.canColor} stripColor={can.stripColor}
                            />
                        )
                    })}
                </section>
                <section className="Main__sugestion4user">
                    <ArrowUp style={{color: '#FFC629', fontSize: '3rem'}} />
                    <strong>Clique em uma das lixeiras para descobrir</strong>
                    <ArrowUp style={{color: '#628862', fontSize: '2rem'}} />
                </section>
            </div>

            <footer className="Main__footer">
                <a href="http://" className="Main__mapInfo" target="_blank" rel="noopener noreferrer">
                    <Location style={{color: '#5286C0', fontSize: '2rem'}} />
                    <p>Através desse link, você pode se informar sobre os pontos de reciclagem.</p>
                </a>
                <div className="Main__social">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <Email style={{color: '#913834', fontSize: '2rem'}} />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub style={{color: '#FFC629', fontSize: '2rem'}} />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin style={{color: '#5286C0', fontSize: '2rem'}} />
                    </a>
                </div>
            </footer>

            <img className="Main__bottom" src={SVG} alt="visual bottom SVG" />
        </div>
    )
}