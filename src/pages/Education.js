import '../pages/Education.css';
import React from "react";
import { Link } from 'react-router-dom';

const Education = () => {
    return( 
    <div className="education_background">
    <h1 className='edu_heading_styling'>Education</h1>
    <ul className='edu_main_list'>


        <li className='sublist_style'>
            <Link to='/maths' className='link_style'>
            <p className='edu_subject_style'>Mathematics</p>
            </Link>
        </li>

    
        <li className='sublist_style'>
            <Link to='/social' className='link_style'>
            <p className='edu_subject_style'>Social Science</p>
               
            </Link>
        </li>


        <li className='sublist_style'>
            <Link to='/biology' className='link_style'>
            <p className='edu_subject_style'>Biology</p>
            </Link>
        </li>
    </ul>
    <ul className='edu_main_list'>
         <li className='sublist_style'>
            <Link to='/chemistry' className='link_style'>
            <p className='edu_subject_style'>Chemistry</p>
           
            </Link>
        </li>
        
        <li className='sublist_style'>
            <Link to='/physics' className='link_style'> 
            <p className='edu_subject_style'>Physics</p>
            </Link>
        </li>
        
        <li className='sublist_style'>
            <Link to='/english' className='link_style'>
            <p className='edu_subject_style'>English</p>
            </Link>
        </li>
    </ul>
    </div>

        );
}

export default Education;