import React from 'react';
import CardItem from '../CardItem';

export default function ContactUs() {
    return (
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        type="vertical"
                        src='images/img-9.jpg'
                        text={['Dr. Chikku Mathew', 'MBBS MD(Psychiatrist)', 'Consultant Psychiatrist', 'Consulting Time: Monday - Friday 3.00PM to 5.00 PM', 'Mob: 6238483493']}
                        label='Contact Us'
                        path='/services'
                    />
                    <CardItem
                        type="vertical"
                        src='images/img-9.jpg'
                        text='Sad mood, Fatigue, Lack of Motivation, Hopelessness'
                        label='Locate Us'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    )
}