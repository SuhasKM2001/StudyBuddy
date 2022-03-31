import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavbarHeader.css"
import { RiArrowDropDownLine } from 'react-icons/ri'
import LOGO2 from '../img/LOGO2.png'

function NavbarHeader (){

    // const[donate_dropdown, setdonate_dropdown]=useState(false);

    // function Donatedropdown()
    // {
    //     if(donate_dropdown==true)
    //     setdonate_dropdown(false);
    //     else
    //     setdonate_dropdown(true);
    //}
    return (
        <header>
        <nav className='Navbardesign'>
            <img className='imageresize' src= {LOGO2} />
            <h1 className='Title1'>STUDY</h1>
            <h1 className='Title'>BUDDY</h1>
            <ul className='List_styling'>
                <li>
                    <Link to="/" className='List_substyling'>Home</Link>
                </li>
           
                <li>
                    {/* <Link to="/donation" className='List_substyling' onClick={ Donatedropdown }>Donate Here<RiArrowDropDownLine className='dropicon_style' /> </Link> */}
                    <Link to="/donation" className='List_substyling'>Orphanages</Link>
                    {/* <div>
                        {donate_dropdown &&(
                            <ul className='dropdown_styling'>
                                <li className='dropdown_substyling'>
                                    <Link to='/donation' className='dropdown_linkstyle'>
                                        Books and Cloth Donation
                                    </Link>
                                </li>
                                <li className='dropdown_substyling'>
                                    <Link to='/donation' className='dropdown_linkstyle'>
                                        Orphanage
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div> */}
                </li>
        
                <li>
                    <Link to="/education" className='List_substyling'>Learning Hub</Link>
                </li>
            
                <li>
                    <Link to="/orphanage" className='List_substyling'>Donate Here</Link>
                </li>
            
                {/* <li>
                    <Link to="/volunteer" className='List_substyling'>Volunteer Login </Link>
                </li> */}
            
                <li>
                    <Link to="/aboutus" className='List_substyling'>Who we are</Link>
                </li>
            </ul>


        </nav>
        </header>
    );
}

export default NavbarHeader;