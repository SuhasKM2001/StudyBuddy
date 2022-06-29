import { useRef } from "react";
import { useHistory } from "react-router-dom";
import '../cloth_donate/ClothDonateformstyle.css';

function ClothDonateform(props)
{
    const history = useHistory();
    const donate_ageInputRef = useRef();
    const donate_locationInputRef = useRef();
    const donate_contactInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const entereddonate_age = donate_ageInputRef.current.value;
        const entereddonate_location = donate_locationInputRef.current.value;
        const entereddonate_contact = donate_contactInputRef.current.value;

        const donate_age1 = entereddonate_age;
        const donate_location1 = entereddonate_location;
        const donate_contact1 = entereddonate_contact;

        fetch(
            'https://cloth-donation-3e7d2-default-rtdb.firebaseio.com/cloth.json',
            {
                method: 'POST' , 
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    donate_age:donate_age1,
                    donate_location:donate_location1,
                    donate_contact:donate_contact1,

                }),
            }
        ).then(() => {history.replace('/clothdonation');});

    }

return(
<form onSubmit={submitHandler} className="main_form_style">
    <div>
            <label htmlFor='donate_age' className='donateform_label_style'>Age:</label><br />
            <input type='text' required id='donate_age' ref={donate_ageInputRef} className='input_style' />
    </div>

    <div>
            <label htmlFor='donate_location' className='donateform_label_style'>Your place of living:</label><br />
            <input type='text' required id='donate_location' ref={donate_locationInputRef} className='input_style' />
    </div>

    <div>
            <label htmlFor='donate_contact' className='donateform_label_style'>Contact Details:</label><br />
            <input type='text' required id='donate_contact' ref={donate_contactInputRef} className='input_style' />
    </div>

        <div>
            <button className='donateform_submit'>Submit</button>
        </div>


</form>
);
}
export default ClothDonateform;