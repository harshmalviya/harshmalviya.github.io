import React from 'react';
import classes from './Home.module.css';
import home from '../../assets/home.svg';
import intro from '../../assets/intro.svg';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Helmet>
        <title>Harsh - Portfolio | Home</title>
      </Helmet>
      <section className={classes.home}>
        <div className={classes.home__text}>
          <h2>
            Hi There! <span className={classes.wave}>👋</span>
          </h2>
          <h2>
            I'M <span className={classes.name}>HARSH MALVIYA</span>{' '}
          </h2>
          <h1 className={classes['title-group']}>
            <span className={classes.text_1}>Fullstack Developer</span>
            <span className={classes.text_2}>React Js Fan ♥</span>
          </h1>
          <div className={classes.cta}>
            <button className={classes.btn}>
              <i className="fa-solid fa-download"></i>
              <a
                className={classes.btn_link}
                href="/harshmalviya.pdf"
                download="harshmalviya.pdf"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <img className={classes.home__image} src={home} alt="" />
      </section>

      <section className={classes.aboutme}>
        <div className={classes.aboutme__text}>
          <h1 className={classes.heading}>
            LET ME <span className={classes.coloured}>INTRODUCE MYSELF</span>
          </h1>
          <div className={classes.aboutme__text__para}>
            <p>
              I am a <span className={classes.coloured}>Computer Science </span>
              student interested in programming, especially
              <span className={classes.coloured}> Web Development. </span>
              Javascript fascinates me, hence
              <span className={classes.coloured}>
                {' '}
                MERN - Mongo, Express, React & NodeJs&nbsp;
              </span>
              is my tech stack. Apart from React, I have knowledge of{' '}
              <span className={classes.coloured}>Next Js</span>, and all famous
              frontend component libraries that help in building modern UIs in
              less time. Below are the links where you can find me, also you can
              directly contact me through this{' '}
              <Link to="/about" className={classes.contactLink}>
                contact form.
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.aboutme__image}>
          <img className={classes.intro} src={intro} alt="" />
        </div>
      </section>
      <section className={classes.contact}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={classes.coloured}>connect</span> with me
        </p>
        <div className={classes.social}>
          <div className={classes.socialicon}>
            <InstagramIcon
              onClick={() =>
                window.open('https://www.instagram.com/harshmalviya72')
              }
            />
          </div>
          <div className={classes.socialicon}>
            <GitHubIcon
              onClick={() => window.open('https://www.github.com/harshmalviya')}
            />
          </div>
          <div className={classes.socialicon}>
            <LinkedInIcon
              onClick={() =>
                window.open('https://www.linkedin.com/in/harshmalviya72')
              }
            />
          </div>
          <div className={classes.socialicon}>
            <TwitterIcon
              onClick={() =>
                window.open('https://www.twitter.com/harshmalviya72')
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
