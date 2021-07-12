import React from 'react';
import CardItem from '../CardItem';
import MapSection from '../Map';
import { constants } from '../../common/constants';
import phoneIcon from '@iconify/icons-mdi/phone-outline';
import clockTimeFiveOutline from '@iconify-icons/mdi/clock-time-five-outline';
import accountIcon from '@iconify-icons/mdi/account';

export default function ContactUs() {
    return (
        <>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            type="vertical"
                            src='images/img-telephone.jpg'
                            text={[
                                { content: 'Dr. Chikku Mathew, MBBS MD(Psychiatrist), Consultant Psychiatrist', icon: accountIcon },
                                { content: 'Monday - Friday 3.00PM to 5.00 PM', icon: clockTimeFiveOutline },
                                { content: '6238483493', icon: phoneIcon }
                            ]}
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
            <MapSection location={constants.LOCATION} zoomLevel={17}></MapSection>
        </>
    )
}