import React from "react";
import { useState, useEffect } from 'react';
import "../pages/Donation.css";
import Cardlist from "../components/donate_here/Cardlist";

function Donation() {

const [isLoading, setIsLoading] = useState(true);
const [loadedOrphanages, setLoadedOrphanages] = useState([]);

useEffect(() => {
  setIsLoading(true);
  fetch('https://orphanage-details02-default-rtdb.firebaseio.com/donation.json'
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
      <section className="Donationpage_background">
          {/* <h3>Orphanage Details</h3> */}
          <Cardlist donations={loadedOrphanages} />
      </section>
  );
}

export default Donation;
