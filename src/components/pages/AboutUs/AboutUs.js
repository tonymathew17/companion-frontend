import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './AboutUs.css';

const useStyles = makeStyles({
    root: {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'min-height': '20vh',
        'margin': '10px',
        'border': '2px solid var(--clr-grey-special)',
        'margin-bottom': '1rem',
        'border-radius': 'var(--radius)',
        'box-shadow': 'var(--light-shadow)'
    }
});

export default function AboutUs() {
    const classes = useStyles();

    return (
        <div className="about-us-container">
            <Card className={classes.root}>
                <img onContextMenu={(e) => { e.preventDefault() }} className="about-us-image" src='images/img-aboutus.jpeg' loading='lazy'></img>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <div className="about-us-content-title" color="textSecondary" variant="h5" component="h2" gutterBottom>
                        A Message From Dr Chikku Mathew
                    </div>
                    <div className="about-us-content" >
                        I appreciate the time you have vested in knowing more about us. We are located at Vaikom, which can easily be approached from Kottayam or Ernakulam or Alleppey districts.
                        <br></br>
                        <br></br>
                        We offer comprehensive and compassionate care for your mental health needs. We not only function as an out patient clinic but also offers IP and rehabilitative facilities to those requiring it.
                        <br></br>
                        <br></br>
                        We give you a very personal, non judgmental and
                        confidential space where you can bare your mind in full confidence. The Companion will be your mental health support system, will always be there to understand your strengths and challenges and will always proide care with a personalized touch.

                    </div>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <div className="about-us-content-title" color="textSecondary" variant="h5" component="h2" gutterBottom>
                        About Us
                    </div>
                    <div className="about-us-content">
                        Dr Chikku Mathew is the Chief Consultant Psychiatrist at The Companion.  Dr Chikku Mathew   completed her MD PSYCHIATRY from Government Medical College Ernakulam and Government Medical College Kottayam(Senior Residency). She completed her MBBS from Government Medical College Thrissur. She has extensive experience in evaluating and  treating various mental health issuesand will offer a tailor made treatment plan customised to the client's needs.
                        <br></br>
                        <br></br>
                        What makes us different?
                        <br></br>
                        <ul className="about-us-points">
                            <li className="about-us-points-list">You can communicate directly with Dr Chikku Mathew through WhatsApp messages or calls</li>
                            <li className="about-us-points-list">We are flexible in terms of in person or teleconsultations</li>
                            <li className="about-us-points-list">We offer a very private space  where the consultant offers you her undivided attention</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}