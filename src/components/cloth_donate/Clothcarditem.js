import "./clothcarditem.css";
import CLOTH_DONATION from "../cloth_donate/CLOTH_DONATION.jpg";
function Clothcarditem(props)
{
    return (
        <li>
            <div className="container">

<div className="item">
	<div className="inneritem">
		<div className="innerimage">
			<img src={CLOTH_DONATION} class="imageedit" alt="Error" />
			{/* <img src="home.jpg" class="imageedit"> */}
		</div>
		<div className="innerdetails">
			<div className="innertext">
				<h2 className="h2style">{props.donate_age}</h2>
				<h6 className="h6style">Age</h6>
			</div>
			<div className="innertext">
				<h2 className="h2style">{props.donate_location}</h2>
				<h6 className="h6style">Location</h6>
			</div>
			<div className="innertext">
				<h2 className="h2style">{props.donate_contact}</h2>
				<h6 className="h6style">Contact</h6>
			</div>
		</div>
	</div>   
</div>







</div>
        </li>
    );
}

export default Clothcarditem;