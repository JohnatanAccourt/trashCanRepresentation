import React from 'react';
import TrashCanComponent from '../TrashCan/TrashCanComponent';
// import FooterComponent from './components/Footer/FooterComponent';

import ArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Location from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';

import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';

import SVG from '../../assets/bottom.svg';

import './styles.css';

export default function MainComponent({onClick}){
    return(
        <div>
            <div className="Main__content">
                <h1>Afinal, o que significa cada cor?</h1>
                <section className="Main__cans">
                    <TrashCanComponent 
                        onClick={onClick} 
                        height={340} width={220} marginTop={100} 
                        canColor='#903733' stripColor='#732C32' 
                    />
                    <TrashCanComponent 
                        onClick={onClick} 
                        height={340} width={220} marginTop={100}
                        canColor='#396F50' stripColor='#1B5131' 
                    />
                    <TrashCanComponent 
                        onClick={onClick} 
                        height={340} width={220} marginTop={100}
                        canColor='#E2C031' stripColor='#D4AE32' 
                    />
                    <TrashCanComponent 
                        onClick={onClick} 
                        height={340} width={220} marginTop={100}
                        canColor='#145AA8' stripColor='#0A3361'
                    />
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