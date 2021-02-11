import React from 'react';
import './styles.css';

import TrashCanComponent from '../TrashCan/TrashCanComponent';

import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Close from '@material-ui/icons/Close';

import cans from '../../consts/totalList.json';

export default function ModalComponent(
    {
        closeModal,
        onClick,
        trashColor,
        description,
        exceptions,
        stripColor,
        canColor,
        can,
        images,
        canChange,
        count,
        closed
    }
){
    const [canItem, setCan] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const result = cans.filter(index => index.name === can.next);
        setCan(result[0]);
        setCounter(counter + count);
        console.log(closed);
    },[canColor])
    

    return(
        <div className="Modal__container">
            <Close onClick={closeModal} style={{color: 'white', fontSize: '4rem', position: 'absolute', top: 5, right: 5, zIndex: 100}} />
            <article className={closed ? "Modal__left" : "Modal--leftClosed"}>
                <div className={ canChange ? `${counter === 1 ? 'modal' : 'Modal__trashAnima'}` : "Modal__trashAnimaChange"}>
                    <TrashCanComponent
                        height={700} width={450} marginLeft={-120}
                        canColor={canColor} stripColor={stripColor}
                    />
                </div>
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

                    {images.length !== 0 ? <small>Pode jogar Resíduos como:</small> : <small>Não possui exemplo</small>}

                    <section className="Modal__canThrow">
                        {images.map((index, key) => {
                            return(<img className="Modal__images" key={key} src={index} alt="imgs with sugestions" />)
                        })}
                    </section>
                </div>
            </article>
            <section className={closed ? "Modal__right" : "Modal--rightClosed"}>
                <button onClick={onClick} style={{ backgroundColor: canItem.canColor }}>
                    <ArrowRight style={{color: 'white', fontSize: '5rem'}} />
                </button>
                <TrashCanComponent
                    height={200} width={120}
                    canColor={canItem.canColor} stripColor={canItem.stripColor}
                />
            </section>
        </div>
    )
}