"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Slider from '@/components/Slidder';
import ScheduleCalendar from '@/components/Inicio/ScheduleCalendar';
import InfoMetSection from '@/components/Inicio/InfoMetSection';
import SocialMedia from '@/components/Socialmedia';
//import FooterUbi from '@/components/FooterUbi';

const Inicio = () => {
    return(
      <>     
        <Navbar/>     
        <SocialMedia/>    
        <Slider/>  
        <InfoMetSection/>        
        <ScheduleCalendar/>                                          
                                               
      </>
    );
};

export default Inicio;
