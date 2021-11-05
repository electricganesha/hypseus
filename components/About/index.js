import React from 'react';
import styles from './About.module.scss'

const About = props => {
    return (
        <div className={styles.about}>
            <h1>What is HYPSEUS?</h1>
            <p>The idea for project HYPSEUS came about during the 2020 pandemic when I started asking people for recommendations and lists of stuff to watch / listen / read / play
                during this time where it was hard to find a center and fully appreciate things with all the strangeness of the period. Thinking about this exchange and a very
                interesting <a href="https://www.youtube.com/watch?v=Wzj4h0R_ryQ">video</a> I had seen regarding the relationship of video-games with the <a href="https://en.wikipedia.org/wiki/Sublime_(philosophy)">
                    Kantian philosophical  concept of the sublime </a>, I decided to create a website that would function as a curated list of things I myself find sublime, in different cultural
                mediums such as cinema, music, video-games, literature and comics. I am hoping you find these recommendations useful and help out with extending this list by getting in touch
                and sharing your own recommendations.
            </p>
            <div className={styles.quote} >
                <q>
                    Whereas the beautiful is limited, the sublime is limitless, so that the mind in the presence of the sublime, attempting to imagine what it cannot, has pain in the failure but pleasure in contemplating the immensity of the attempt
                </q>
                <span>&mdash;  Immanuel Kant, Critique of Pure Reason</span>
            </div>
        </div>
    );
};

export default About;
