import Bookcarditem from "./Bookcarditem";
// import classes from './Cardlist.module.css';
import classes from './bookcardlist.module.css';


function BookCardlist(props)
{
    return(
        <ul className={classes.list_items}>
        {props.donations.map((donation) => (
            <Bookcarditem
            key={donation.id}  
            donate_subjectname={donation.donate_subjectname}
            donate_class={donation.donate_class}
            donate_donorname={donation.donate_donorname}
            donate_contact={donation.donate_contact}
            donate_place={donation.donate_place}
            />
        ))

        }
        </ul>
    );
}

export default BookCardlist;