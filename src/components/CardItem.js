import React from 'react';
import { Link } from 'react-router-dom';
import { InlineIcon } from '@iconify/react';

function CardItem(props) {

    const onCardClick = cardType => {
        props.onClick(cardType);
    }

    return (
        <>
            {props.type === 'vertical' ?
                <li className="cards__item">
                    <div className="cards__item__link_vertical">
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <img src={props.src} alt="Travel Image"
                                className="cards__item__img" />
                        </figure>
                        <div className="cards__item__info">
                            <h5 className="cards__item__text" >{
                                Array.isArray(props.text) ?
                                    props.text.map(item =>
                                        <>
                                            {
                                                item.icon ? <p><InlineIcon icon={item.icon} />{item.content}</p> : item.content
                                            }
                                            {item.lineBreak ? <br></br> : null}
                                        </>
                                    )
                                    : props.text
                            }</h5>
                        </div>
                    </div>
                </li>
                :
                <li className="cards__item">
                    <div className="cards__item__link" onClick={() => { onCardClick(props.type) }}>
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <img src={props.src} alt="Travel Image"
                                className="cards__item__img" />
                        </figure>
                        <div className="cards__item__info">
                            <h5 className="cards__item__text" >{props.text}</h5>
                        </div>
                    </div>
                </li>
            }
        </>
    )
}

export default CardItem;