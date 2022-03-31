import React from "react";
import { useState, useEffect } from 'react';
import "../pages/Donation.css";
import Cardlist from "../components/donate_here/Cardlist";

// const Donation_details = [
//   {
//     id: "d1",
//     orphanage_name: "Sneha Orphanage",
//     orphanage_address:
//       "31, Sai Geetham, 5th Main road,5th C cross,P & T colony, Horamavu, Bengaluru, Karnataka 560043",
//     orphanage_contact:'098451 90532',
//     orphanage_meals: '100/day',
//     orphanage_googlelink: 'https://goo.gl/maps/n23NJkrRTff3JU9R8'
//   },
//   {
//     id: "d2",
//     orphanage_name: "Sarala Foundation",
//     orphanage_address:
//       "101, 11th Cross, Sharavathi St, Ramamurthy Nagar, Bengaluru, Karnataka 560016",
//     orphanage_contact:'085537 12250',
//     orphanage_meals: '120/day',
//     orphanage_googlelink: 'https://goo.gl/maps/45jKFKVv3nto1q6Z7'
//   }
// ];

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
