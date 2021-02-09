import React, { useState } from 'react';
import TrashCanComponent from '../TrashCan/TrashCanComponent';
import ModalComponent from '../Modal/ModalComponent';

import ArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Location from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';

import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';

import SVG from '../../assets/bottom.svg';

import cans from '../../consts/totalList.json';

import './styles.css';

export default function MainComponent(){
    const [modal, setModal] = useState(false);
    const [item, setItem] = useState({});
    const [canChange, setCanChange] = useState(false);

    const apresentationalCans = cans.slice(0,4);

    function handleModal(can){
        setModal(true);
        setItem(can);
    }
    
    function nextCan(){
        const result = cans.filter(index => index.name === item.next);
        setItem(result[0]);
    }

    return(
        <div>
            {modal ?
                <ModalComponent 
                    onClick={() => [setTimeout(() => {nextCan()}, 1000), setCanChange(!canChange)]}
                    closeModal={() => setModal(false)}
                    can={item}
                    trashColor={item.name}
                    description={item.description}
                    exceptions={item.cannotThrow}
                    stripColor={item.stripColor}
                    canColor={item.canColor}
                    images={item.throwable}
                    canChange={canChange}
                />:
                <></>
            }
            <div className="Main__content">
                <h1>Afinal, o que significa cada cor?</h1>
                <section className="Main__cans">
                    {apresentationalCans.map((can, key) => {
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
                <a href="https://www.google.com/maps/d/edit?mid=1FwgYP95R7cz_LF6n5u1o6BOuxXs&ie=UTF8&oe=UTF8&msa=0&ll=-24.190769712964773%2C-46.141814000000004&z=8" className="Main__mapInfo" target="_blank" rel="noopener noreferrer">
                    <Location style={{color: '#5286C0', fontSize: '2rem'}} />
                    <p>Através desse link, você pode se informar sobre os pontos de reciclagem.</p>
                </a>
                <div className="Main__social">
                    <a href="mailto:johnatan1999accourt@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Email style={{color: '#913834', fontSize: '2rem'}} />
                    </a>
                    <a href="https://github.com/JohnatanAccourt" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub style={{color: '#FFC629', fontSize: '2rem'}} />
                    </a>
                    <a href="https://www.linkedin.com/in/johnatan-accourt-93937a19a/" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin style={{color: '#5286C0', fontSize: '2rem'}} />
                    </a>
                </div>
            </footer>

            <img className="Main__bottom" src={SVG} alt="visual bottom SVG" />
        </div>
    )
}