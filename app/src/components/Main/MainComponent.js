import React from 'react';
import TrashCanComponent from '../TrashCan/TrashCanComponent';
// import FooterComponent from './components/Footer/FooterComponent';
import SVG from '../../assets/bottom.svg';

import './styles.css';

export default function MainComponent(){
    return(
        <div>
            <section className="Main__cans">
                <TrashCanComponent canColor='#903733' stripColor='#732C32' />
                <TrashCanComponent canColor='#396F50' stripColor='#1B5131' />
                <TrashCanComponent canColor='#E2C031' stripColor='#D4AE32' />
                <TrashCanComponent canColor='#145AA8' stripColor='#0A3361' />
            </section>
            <img className="Main__bottom" src={SVG} alt="visual bottom SVG" />
        </div>
    )
}