import React from 'react';
import './styles.css';

import TrashCanComponent from '../TrashCan/TrashCanComponent';

import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Close from '@material-ui/icons/Close';

export default function ModalComponent({closeModal}){
    return(
        <div className="Modal__container">
            <Close onClick={closeModal} style={{color: 'white', fontSize: '4rem', position: 'absolute', top: 5, right: 5}} />
            <section className="Modal__left">
                <TrashCanComponent
                    height={700} width={450} marginLeft={-120}
                    canColor='#903733' stripColor='#732C32'
                />
                <div className="Modal__wrapperInfo">
                    <h2>Lixeira</h2>
                    <strong>Vermelha</strong>

                    <p>
                        Essa lixeira você pode depositar materiais de plástico, com exceção:
                    </p>

                    <ul className="Modal__exceptions">
                        <li>Tomadas</li>
                        <li>Espuma</li>
                        <li>Cabos de panela</li>
                        <li>Acrilico</li>
                    </ul>
                </div>
            </section>
            <section className="Modal__right">
                <button>
                    <ArrowRight style={{color: '#222A30', fontSize: '5rem'}} />
                </button>
                <TrashCanComponent
                    height={200} width={120}
                    canColor='#FFC629' stripColor='#732C32'
                />
            </section>
        </div>
    )
}