'use client';

import {FC} from 'react'
import Slider from '@/components/Slider';
import NavbarComponent from '@/components/Navbar';
import FooterComponent from '@/components/Footer';

const HomePage: FC = () => {
  return (
    <>
      <NavbarComponent className="z-10"/>
      <Slider />
      <FooterComponent/>
    </>
  );
};

export default HomePage;
