import React from 'react';
import Banner from '../Banner/Banner';
import ExperienceSupportServiceSection from '../ExperienceSupportServiceSection/ExperienceSupportServiceSection';
import Service from '../Service/Service';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
          <Banner/>
          <ExperienceSupportServiceSection/>
          <Service/>
          <Experience/>
          <Portfolio/>
        </div>
    );
};

export default Home;