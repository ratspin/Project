import React from "react";
import background from "../img/tom-yum-kung.jpg";
import Navbar from './Navbar'

var sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${background})`
  };

export default function Home() {
    return (
      <div>
      <Navbar/>
      <section style={ sectionStyle }> </section>
        </div>
    );
  }