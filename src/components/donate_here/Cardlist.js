import CardItem from "./CardItem";
import classes from './Cardlist.module.css';


function Cardlist(props)
{
    return(
        <ul className={classes.list_items}>
        {props.donations.map((donation) => (
            <CardItem
            key={donation.id}  
            orphanage_name={donation.orphanage_name}
            orphanage_address={donation.orphanage_address}
            orphanage_contact={donation.orphanage_contact}
            orphanage_meals={donation.orphanage_meals}
            orphanage_googlelink={donation.orphanage_googlelink}
            />
        ))

        }
        </ul>
    );
}

export default Cardlist;