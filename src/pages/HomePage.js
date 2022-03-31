import React from "react";
import "../pages/HomePage.css";
import { MdCastForEducation } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { TiTick } from 'react-icons/ti'
import HomeCard from "../components/cards_design/HomeCard";
import { Carousel } from "react-bootstrap";
import Carousel_img1 from "../components/img/Carousel_img1.jpg";
import Carousel_img2 from "../components/img/Carousel_img2.jpg";
import Carousel_img3 from "../components/img/Carousel_img3.jpg";
import { Link } from "react-router-dom";
import Donation from "../pages/Donation";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();
  const icon = <BsHouseFill size="3rem" />;
  const icon1 = <MdCastForEducation size="3rem" />;
  const icon2 = <FaPeopleCarry size="4rem" />;

  function navigatetolink() {
    <Link to={Donation}></Link>;
  }

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel_img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>
              Education is the most powerful weapon for changing the world -
              Nelson Mandela
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel_img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4>
              Alone we can do so little together we can do so much - Helen
              Keller
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel_img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4>
              It is not how much we give but how much love we put into giving -
              Mother Teresa
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="homepage_content">
        <div className="homepage_subcontent1">
          <p className="homepage_content_para">
          The groundwork for a better life lies in education. Education empowers
          an individual to earn their livelihood and also increases one's
          awareness on a range of issues. From healthcare, to appropriate social
          behaviour, to understanding one's rights.
          </p>
        </div>

        <div className="homepage_subcontent2">
          <ul className="homepage_list_style">
            <li className="homepage_sublist_style">
              <TiTick className="homepage_tick_style"/> To work for the social development of underprivileged individuals,
              groups and communities in Bangalore
            </li>

            <li className="homepage_sublist_style"><TiTick className="homepage_tick_style"/> To encourage education</li>

            <li className="homepage_sublist_style">
            <TiTick className="homepage_tick_style"/> To assist in the process of social integration and personal
              realisation of underprivileged children, young people
            </li>

            <li className="homepage_sublist_style">
            <TiTick className="homepage_tick_style"/> To endorse the human rights and in particular the rights of  
               underprivileged children and young people as well as the right to
              education and provide food for orphans
            </li>

            <li className="homepage_sublist_style">
            <TiTick className="homepage_tick_style"/> To encourage and popularise voluntary work
            </li>

          </ul>
        </div>

      </div>

      <div className="cardwarpstyle">
        <div className="carddetails">
          <HomeCard text="Orphanages" icon={icon} url={"/donation"} />
          <HomeCard text="Learning Hub" icon={icon1} url={"/education"} />
          <HomeCard text="Donate Here" icon={icon2} url={"/orphanage"} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
