// import classes from "./CardItem.module.css";
import home from '../books_donate/home.jpg';
import  "./bookcarditem.css";


function Bookcarditem(props) {
  return (
    <li>
    <div className="mainclassstyle">
    <div className="courses-container">
	<div className="course">
		<div className="course-preview">
			<h2 className='subject_title_style'>{props.donate_subjectname}</h2>
		</div>
		<div className="course-info">
			
			<h3 className='course_info_details_style'>Class: {props.donate_class}</h3>
			<h3 className='course_info_details_style'>Donor name: {props.donate_donorname}</h3>
			<h3 className='course_info_details_style'>Contact: {props.donate_contact}</h3>
			<h3 className='course_info_details_style'>Place: {props.donate_place}</h3>

		</div>
	</div>
</div>
</div>
    </li>
  );
}

export default Bookcarditem;
