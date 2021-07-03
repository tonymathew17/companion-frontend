import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { constants } from '../common/constants';

function Cards() {
    return (
        <div className='cards'>
            <h1>{constants.SERVICE_SECTION_CAPTION}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Sad mood, Fatigue, Lack of Motivation, Hopelessness'
                            label='Depression'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Irritability, Increased Energy, Decreased Need for Sleep'
                            label='Bipolar Disorder'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Grief, Worthlessness, Feeling Alone'
                            label='Mood Disorders'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Nervous, Restless, Tense, Difficulty Concentrating'
                            label='Anxiety'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Rapid Heart Rate, Shaking, Sweating, Difficulty Breathing'
                            label='Panic Attacks'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Repetitive thoughts or urges, Excessive Doubt or Fear'
                            label='OCD'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Intrusive Thoughts, Nightmares, Flashbacks'
                            label='PTSD'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Difficulty Staying Focused, Forgetful, Disorganized'
                            label='ADHD'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Difficulty Going or Staying Asleep, Waking Up Repeatedly'
                            label='INSOMNIA'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
