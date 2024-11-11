"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import All from '@/components/lases/All';
import SocialMedia from '@/components/Socialmedia'
import Footer from '@/components/Footer';

const Clases = () => {
    return(        
        <>     
        <Navbar/>     
        <SocialMedia/>    
        <All/>  
        <Footer/>  
      </>               
    );
};

export default Clases;