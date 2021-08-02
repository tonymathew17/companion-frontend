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
                                { content: 'Dr. Chikku Mathew, MBBS MD(Psychiatrist), Consultant Psychiatrist', icon: accountIcon, lineBreak: true },
                                { content: 'Monday - Friday 3.00PM to 5.00 PM', icon: clockTimeFiveOutline, lineBreak: true },
                                { content: '6238483493', icon: phoneIcon, lineBreak: false }
                            ]}
                            label='Contact Us'
                        />
                        <CardItem
                            type="vertical"
                            src='images/img-locate-us.jpg'
                            text={[
                                { content: constants.LOCATION.address.line1, lineBreak: true },
                                { content: constants.LOCATION.address.line2, lineBreak: true },
                                { content: constants.LOCATION.address.line3, lineBreak: true },
                                { content: constants.LOCATION.address.line4, lineBreak: false }
                            ]}
                            label='Locate Us'
                        />
                    </ul>
                </div>
            </div>
            <MapSection location={constants.LOCATION} zoomLevel={17}></MapSection>
        </>
    )
}