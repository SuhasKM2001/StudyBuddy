import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarHeader from './components/layouts/NavbarHeader';
import Homepage from './pages/HomePage';
import Donation from './pages/Donation';
import Education from './pages/Education';
import OrphangeLoginPage from './pages/OrphanageLoginpage';
import ClothDonation from './pages/ClothDonation';
import VolunteerLoginPage from './pages/VolunteerLoginpage';
import AboutUs from './pages/AboutUs';
import FooterComponent from './components/layouts/FooterComponent';
import MathsPage from './components/Learning_Hub/Maths';
import EnglishPage from './components/Learning_Hub/English';
import PhysicsPage from './components/Learning_Hub/Physics';
import ChemistryPage from './components/Learning_Hub/Chemistry';
import BiologyPage from './components/Learning_Hub/Biology';
import SocialPage from './components/Learning_Hub/Social_Science';
import Donatehereform from './components/books_donate/Donatehereform';
import ClothDonateform from './components/cloth_donate/ClothDonateform';

function App() {
  return( 
    <div>

      <NavbarHeader />
      <div>
        <Switch>
      <Route path='/' exact>
        <Homepage />
      </Route>
  
      <Route path='/donation'>
        <Donation />
      </Route>

      <Route path='/education'>
        <Education />
      </Route>

      <Route path='/orphanage'>
        <OrphangeLoginPage />
      </Route>

      <Route path='/clothdonation'>
        <ClothDonation />
      </Route>

      <Route path='/volunteer'>
        <VolunteerLoginPage />
      </Route>

      <Route path='/aboutus'>
        <AboutUs />
      </Route>

      <Route path='/maths'>
        <MathsPage />
      </Route>

      <Route path='/english'>
        <EnglishPage />
      </Route>

      <Route path='/physics'>
        <PhysicsPage />
      </Route>

      <Route path='/chemistry'>
        <ChemistryPage />
      </Route>

      <Route path='/biology'>
        <BiologyPage />
      </Route>

      <Route path='/social'>
        <SocialPage />
      </Route>

      <Route path='/donatehereform'>
        <Donatehereform />
      </Route>

      <Route path='/clothdonateform'>
        <ClothDonateform />
      </Route>

      </Switch>
      </div>

      <FooterComponent />
    </div>
  );
} 

export default App;
