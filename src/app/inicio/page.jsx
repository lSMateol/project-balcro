"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Slider from '@/components/Slidder';
import ScheduleCalendar from '@/components/inicio/ScheduleCalendar';
import InfoMetSection from '@/components/inicio/InfoMetSection';
import SocialMedia from '@/components/Socialmedia';
import UbiMap from '@/components/UbiMap';
import Footer from '@/components/Footer';

const Inicio = () => {
    return(
      <>     
        <Navbar/>     
        <SocialMedia/>    
        <Slider/>  
        <InfoMetSection/>        
        <ScheduleCalendar/>                                       
        <UbiMap/>                                       
        <Footer/>                                       
      </>
    );
};

export default Inicio;
