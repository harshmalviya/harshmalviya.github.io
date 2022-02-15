import React from 'react';
import about from '../../assets/about.svg';
import classes from './About.module.css';
import { Helmet } from 'react-helmet';

// SVG's for skillsets
import css from '../../logo/css.svg';
import next from '../../logo/next.svg';
import firebase from '../../logo/firebase.svg';
import html from '../../logo/html.svg';
import js from '../../logo/js.svg';
import mongodb from '../../logo/mongodb.svg';
import nodejs from '../../logo/nodejs.svg';
import react from '../../logo/react.svg';
import ContactForm from '../contact/ContactForm';

function About() {
  return (
    <>
      <Helmet>
        <title>Harsh - Portfolio | About</title>
      </Helmet>
      <section className={classes.about}>
        <div className={classes.about__text}>
          <h1 className={classes.heading}>
            Know Who <span className={classes.coloured}>I'M</span>
          </h1>
          <div className={classes.about__text__para}>
            Hello Everyone, I'm{' '}
            <span className={classes.coloured}>Harsh Malviya</span> from{' '}
            <span className={classes.coloured}>Lucknow, India.</span> I am a
            third year student pursuing{' '}
            <span className={classes.coloured}>Computer Science Honours</span>{' '}
            from University of Delhi.
            <br />
            Learning everyday and completing the work on time are two things I
            always work upon. It will be a pleasure working with you.
          </div>
          <div className={classes.quote}>
            “Choose a job you love, and you will never have to work a day in
            your life.”
            <p>-Confucius</p>
          </div>
        </div>
        <div className={classes.about__image}>
          <img className={classes.aboutimage} src={about} alt="" />
        </div>
      </section>

      <section className={classes.skills}>
        <div className={classes.skills__text}>
          <h1>
            Professional <span className={classes.coloured}>Skillset</span>
          </h1>
        </div>
        <div className={classes.skills__images}>
          <div className={classes.image__container}>
            <img src={next} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={css} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={js} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={html} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={react} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={mongodb} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={firebase} alt="" />
          </div>
          <div className={classes.image__container}>
            <img src={nodejs} alt="" />
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default About;
