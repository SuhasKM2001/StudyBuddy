import classes from "./CardItem.module.css";
import home from '../donate_here/home.jpg'


function CardItem(props) {
  return (
    <li>
    <div className={classes.mainbody}>
        <div className={classes.container}>
          <div className={classes.donation_details}>
            <h1>{props.orphanage_name}</h1>
            <p className={classes.information}>
              Address: 
              {props.orphanage_address}
              <br />
              Contact: 
              {props.orphanage_contact}
              <br />
              Meals Required:
              {props.orphanage_meals}
            </p>
            <div className={classes.control}>
              <button className={classes.btn}>
                <a href={props.orphanage_googlelink} target="_blank">
                  <span className={classes.buy}>Locate</span>
                </a>
              </button>
            </div>
          </div>

          <div className={classes.product_image}>
            <img src={home} alt="Error" />
          </div>
        </div>
    </div>
    </li>
  );
}

export default CardItem;
