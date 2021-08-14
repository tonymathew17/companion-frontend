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
                            src='images/img-depression.png'
                            text='Sad Mood, Fatigue, Lack of Concentration, Suicidal Ideas'
                            label='Depression'
                        />
                        <CardItem
                            src='images/img-bipolardisorder.jpeg'
                            text='Periods of easy irritability or extreme happiness, overactivity and overtalkativeness'
                            label='Bipolar Disorder'
                        />
                        <CardItem
                            src='images/img-mooddisorders.jpeg'
                            text='Grief, Worthlessness, Feeling Alone'
                            label='Mood Disorders'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-anxiety.jpeg'
                            text='Undue worries, apprehensions regarding future, lack of concentration'
                            label='Anxiety'
                        />
                        <CardItem
                            src='images/img-panicattack.jpeg'
                            text='Medically unexplainable episodes of chest pain, shortness of breath and palpitations'
                            label='Panic Attacks'
                        />
                        <CardItem
                            src='images/img-ocd.png'
                            text='Repetitive irrational thoughts and associated acts'
                            label='OCD'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-ptsd.jpeg'
                            text='Intrusive Thoughts, Nightmares, Flashbacks'
                            label='PTSD'
                        />
                        <CardItem
                            src='images/img-adhd.jpeg'
                            text='Difficulty Staying Focused, Forgetful, Disorganized'
                            label='ADHD'
                        />
                        <CardItem
                            src='images/img-insomnia.jpeg'
                            text='Difficulty Going or Staying Asleep, Waking Up Repeatedly'
                            label='INSOMNIA'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
