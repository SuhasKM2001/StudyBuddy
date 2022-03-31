import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../books_donate/Donatehereformstyle.css';

function Donatehereform(props)
{
    const history = useHistory();
    const donate_subjectnameInputRef = useRef();
    const donate_classInputRef = useRef();
    const donate_donornameInputRef = useRef();
    const donate_contactInputRef = useRef();
    const donate_placeInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const entereddonate_subjectname = donate_subjectnameInputRef.current.value;
        const entereddonate_class = donate_classInputRef.current.value;
        const entereddonate_donorname = donate_donornameInputRef.current.value;
        const entereddonate_contact = donate_contactInputRef.current.value;
        const entereddonate_place = donate_placeInputRef.current.value;

        // const DonationData = {
        //     orphanage_name: enteredorphanage_name,
        //     orphanage_address: enteredorphanage_address,
        //     orphanage_contact: enteredorphanage_contact,
        //     orphanage_meals: enteredorphanage_meals,
        //     orphanage_googlelink: enteredorphanage_googlelink,
        // };
            const donate_subjectname1= entereddonate_subjectname;
            const donate_class1= entereddonate_class;
            const donate_donorname1= entereddonate_donorname;
            const donate_contact1= entereddonate_contact;
            const donate_place1= entereddonate_place;

        fetch(
            'https://books-donation02-default-rtdb.firebaseio.com/books.json',
            {
                method: 'POST' ,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    donate_subjectname:donate_subjectname1,
                    donate_class:donate_class1,
                    donate_donorname:donate_donorname1,
                    donate_contact:donate_contact1,
                    donate_place:donate_place1,
                }),
            }
        ).then(() => {history.replace('/orphanage');});
 

    }

return(
    <form onSubmit={submitHandler} className='main_form_style'>
        <div >
            <label htmlFor='donate_subjectname' className='donateform_label_style'>Which Subject are you donating:</label><br />
            <input type='text' required id='donate_subjectname' ref={donate_subjectnameInputRef} className='input_style' />
        </div>

        <div>
            <label htmlFor='donate_class' className='donateform_label_style'>Books related to which class:</label><br />
            <input type='text' required id='donate_class' ref={donate_classInputRef} className='input_style'/>
        </div>

        <div>
            <label htmlFor='donate_donorname' className='donateform_label_style'>Your Name:</label><br />
            <input type='text' required id='donate_donorname' ref={donate_donornameInputRef} className='input_style'/>
        </div>

        <div>
            <label htmlFor='donate_contact' className='donateform_label_style'>Your Contact Details:</label><br />
            <input type='text' required id='donate_contact' ref={donate_contactInputRef} className='input_style'/>
        </div>

        <div>
            <label htmlFor='donate_place' className='donateform_label_style'>Your place of living:</label><br />
            <input type='text' required id='donate_place' ref={donate_placeInputRef} className='input_style'/>
        </div>

        <div>
            <button className='donateform_submit'>Submit</button>
        </div>

    </form>
);


}
export default Donatehereform;