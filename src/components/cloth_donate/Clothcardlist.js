import Clothcarditem from './Clothcarditem';
import classes from './Clothcardlist.module.css';

function ClothCardlist(props)
{
    return(
        <ul className={classes.list_items}>
            {props.donations.map((donation) => (
                <Clothcarditem
                key= {donation.id}
                donate_age={donation.donate_age} 
                donate_location={donation.donate_location}
                donate_contact={donation.donate_contact}
                />

            ))
            
            }

        </ul>
    );
}

export default ClothCardlist;