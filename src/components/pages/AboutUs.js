import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './AboutUs.css';

const useStyles = makeStyles({
    root: {
        width: '40rem',
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontFamily: 'Libre Baskerville',
        fontSize: 17,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function AboutUs() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className="about-us-container">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        A message from Dr Chikku Mathew
                    </Typography>
                    <Typography className="about-us-content" variant="h5" component="h2">
                        I appreciate the time you have vested in knowing more about us. We are located at Vaikom, which can easily be approached from Kottayam or Ernakulam or Alleppey districts.
                        <br></br>
                        <br></br>
                        We offer comprehensive and compassionate care for your mental health needs. We not only function as an out patient clinic but also offers IP and rehabilitative facilities to those requiring it.
                        <br></br>
                        <br></br>
                        We give you a very personal, non judgmental and
                        confidential space where you can bare your mind in full confidence. The Companion will be your mental health support system, will always be there to understand your strengths and challenges and will always proide care with a personalized touch.

                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}