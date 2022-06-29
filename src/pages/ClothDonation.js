import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClothCardlist from "../components/cloth_donate/Clothcardlist"; 
import "../pages/ClothDonation.css";


function ClothDonation ()
{
    const [isLoading, setIsLoading] = useState(true);
    const [loadedOrphanages, setLoadedOrphanages] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://cloth-donation-3e7d2-default-rtdb.firebaseio.com/cloth.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const donates = [];

            for(const key in data) {
                const donate = {
                    id: key,
                    ...data[key]
                };
                donates.push(donate);
            }

            setIsLoading(false);
            setLoadedOrphanages(donates);
        });
    },[]);

    if(isLoading){
        return(
            <section>
            <p>Details..</p>
            </section>
        );
    }
    return(
       <div className="Donationpage_background">
        <button className="contribute_button_style1">
        <Link to="/clothdonateform" className="contribute_button_text_style">Contribute</Link>
        </button>
        <ClothCardlist donations={loadedOrphanages} />
        </div>
    );
}
export default ClothDonation;