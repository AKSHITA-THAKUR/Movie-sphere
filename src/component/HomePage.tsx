import React  from 'react';
import Navbar from './Navbar';
  import Banner from './Banner';
  import PopularMovie from './PopularMovie';
const HomePage: React.FC = () => {

  return (
    <div>
      <Navbar />

      <Banner/>
      <PopularMovie/>
    </div>
  );
};

export default HomePage;
