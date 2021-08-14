import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { constants } from '../common/constants';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    {constants.FOOTER_CAPTION}
                </p>
                <div className="hero-btns">
                    <Button
                        linkTo='/contact-us'
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        Contact Us
                    </Button>
                    <Button
                        linkTo='/contact-us'
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        Book An Appointment
                    </Button>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Quick Links</h2>
                        <Link to='/contact-us'>Contact Us</Link>
                        {/* <Link to='/testimonials'>Testimonials</Link> --- Decide if you need a testimonials page --- */}
                        <Link to='/about-us'>About Us</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link
                            to='//instagram.com/the_companion_clinic/'
                            target="_blank">
                            Instagram
                        </Link>
                        <Link
                            to='//facebook.com/drchikkumathew'
                            target='_blank'>
                            Facebook
                        </Link>
                        <Link
                            to='//linkedin.com/in/dr-chikku-mathew-42a76b210/'
                            target='_blank'>
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Companion
                            <i class="fas fa-hand-holding-medical"></i>
                        </Link>
                    </div>
                    <small class='website-rights'>Companion © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='//facebook.com/drchikkumathew'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='//instagram.com/the_companion_clinic/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
