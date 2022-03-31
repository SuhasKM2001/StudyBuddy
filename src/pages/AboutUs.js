import React from "react";
import classes from '../pages/AboutUs.module.css'

const AboutUs = () => {
  return (
<div className={classes.mainbody}>
    <div className={classes.about_section}>
      <div className={classes.inner_container}>
            <h2 className={classes.h2_styling}>
            The smallest act of kindness is worth more than the grandest intention
            - Oscar Wilde.
            </h2>
            <br/>
            <p className={classes.text}>
            <h4 className={classes.h4_styling}>MISSION</h4>
            Study buddy a non-profit organization website whose mission is to
            empower deprived children and youth through relevant education. it
            works for the social development and integration of underprivileged
            individuals, groups and communities in Bangalore.
            <br/>
            <br/>
            <h4 className={classes.h4_styling}>VISION</h4>
            Our work aims to break the vicious cycle of illiteracy and starvation
            and to restore hope for a better future. We believe that every person
            has the right to access education, resources and opportunities in
            order to live and develop with dignity and to become an active and
            contributing member of our society.
            </p>

            <br/>
            <br/>
            <p className={classes.Contact_us_heading}><b>CONTACT US</b></p>
            {/* <br/> */}

            <div className={classes.Contact_us}>
                <span><u>PHONE NUMBER:</u><br/>+91 7411017576<br/>+91 8197163632<br/></span><br/>
                <span><u>EMAIL ID:</u><br/>spoorthivreddy20@gmail.com<br/>suhaskm@gmail.com</span>
            </div>
      </div>
    </div>
</div>
  );
};

export default AboutUs;
