import React, { Fragment } from 'react';
import classes from './Footer.module.css';
import EmailIcon from '@material-ui/icons/Email';
function footer() {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div>Designed by Harsh Malviya</div>
        <div>Copyright &copy; 2022</div>
        <div className={classes.gmail}>
          <EmailIcon />
          harshmalviya72@gmail.com
        </div>
      </div>
      <div className={classes.mobilefooter}>
        <p>Copyright &copy; 2022</p>
      </div>
    </Fragment>
  );
}

export default footer;
