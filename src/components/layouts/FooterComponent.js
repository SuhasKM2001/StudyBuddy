import '../layouts/FooterComponent.css'

import { RiArrowDropRightLine } from 'react-icons/ri'

function FooterComponent() {
  return (
    <footer className='mainfooter'>
      <div className="mainfooter1">
        <div className="col1">
          <h1>STUDYBUDDY</h1>
          <p className='footerpara'>
            StudyBuddy is a non profit website developed for the students in
            need which will be useful for the children to gain knowledge and
            people can donate items and volunteer.
          </p>
        </div>

        <div className="col2">
          <h3>Quick links</h3> 
          <ul className='quicklink_style'>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Books Donation</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Cloth Donation</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Orphanage</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Learning Hub</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Volunteer Login</li>
          </ul>
        </div>

        <div className="col3">
          <h3>Useful Links</h3>
          <ul className='usefullink_style'> 
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>About us</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Contact us</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Privacy Policy</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>Terms & condition</li>
            <li className='list_style'><RiArrowDropRightLine className='rightarrow_style' size={30}/>FAQ's</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
