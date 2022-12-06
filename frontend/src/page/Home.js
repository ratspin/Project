import React from "react";
import Navbar from './Navbar'

var sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${"tom-yum-kung.jpg"})`
  };

export default function Home() {
    return (
      <div>
      <Navbar/>
      <section style={ sectionStyle }> </section>
        </div>
    );
  }