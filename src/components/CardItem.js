import React from 'react';
import { Link } from 'react-router-dom';
import { InlineIcon } from '@iconify/react';

function CardItem(props) {

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
                                            <ul>
                                                {
                                                    item.icon ? <p><InlineIcon icon={item.icon} />{item.content}</p> : item.content
                                                }
                                            </ul>
                                            <br></br>
                                        </>
                                    )
                                    : props.text
                            }</h5>
                        </div>
                    </div>
                </li>
                :
                <li className="cards__item">
                    <Link className="cards__item__link" to={props.path}>
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <img src={props.src} alt="Travel Image"
                                className="cards__item__img" />
                        </figure>
                        <div className="cards__item__info">
                            <h5 className="cards__item__text" >{props.text}</h5>
                        </div>
                    </Link>
                </li>
            }
        </>
    )
}

export default CardItem;