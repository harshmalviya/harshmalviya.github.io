import React, { useState } from 'react';
import classes from './ContactForm.module.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }
    const data = {
      email,
      name,
      message
    };

    setIsLoading(true);
    try {
      const response = await fetch(
        'https://contact-portfolio-form.herokuapp.com/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
      if (!response.ok) {
        setIsLoading(false);
        throw new Error('Failed to send message');
      }
      setSent(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className={classes.wrapper}>
      <h1 className={classes.formHeading}>Contact Me</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formItem}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={classes.formItem}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.formItem}>
          <label htmlFor="name">Your Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.cta}>
          <button>
            {isLoading ? (
              <div className={classes.loading}></div>
            ) : sent ? (
              <>
                <i className="fa-solid fa-circle-check"></i>SENT
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>SEND
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
