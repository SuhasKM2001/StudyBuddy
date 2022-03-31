import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Cardlist from "../components/donate_here/Cardlist";
import BookCardlist from "../components/books_donate/Bookcardlist";
import Donatehereform from "../components/books_donate/Donatehereform";
import '../pages/OrphanageLoginpage.css';


function OrphangeLoginPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedOrphanages, setLoadedOrphanages] = useState([]);
    
    useEffect(() => {
      setIsLoading(true);
      fetch('https://books-donation02-default-rtdb.firebaseio.com/books.json'
      ).then((response) => {
        return response.json();
      }).then((data) => {
        const donates = [];
    
        for (const key in data) {
          const donate ={
            id: key,
            ...data[key]
          };
          donates.push(donate);
        }
    
        setIsLoading(false);
        setLoadedOrphanages(donates);
      });
    }, []);
    
      
    
    if(isLoading){
      return(
      <section>
        <p>Details..</p>
      </section>
      );
    }
    
      return (
          <div className="Donationpage_background">
              <button className="contribute_button_style">
              <Link to="/donatehereform" className="contribute_button_text_style">Contribute</Link>
              </button>
              <BookCardlist donations={loadedOrphanages} />
          </div>
      );
}

export default OrphangeLoginPage;