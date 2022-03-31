import React from 'react';
import '../cards_design/HomeCard.css';
import {useHistory} from 'react-router-dom';

function HomeCard(props) {
    const history=useHistory();
    return(
        <div className='Homecard_design' onClick={()=>{history.push(props.url)}}>
           <div className='ind_card_design'>
                <div className='icon_design'>{props.icon}</div>
               <h3>{props.text}</h3>
           </div>
        </div>
    );
}

export default HomeCard;