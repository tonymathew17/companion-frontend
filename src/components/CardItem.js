import React from 'react';
import { Link } from 'react-router-dom';

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
                                Array.isArray(props.text) ? props.text.map(item => <ul>{item}</ul>) : props.text
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