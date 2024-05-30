import React from 'react';
import './intro.css';
import bg from '../../assets/prof.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section className="intro"> 
    <div className="introContent">
    <span className="hello">Hello, </span>
    <span className="introText">I'm <span className="introName">Aryan Jha</span><br/>React.js Developer🚀</span>
    <p className="introPara">"I am a Sophomore at IIIT Manipur, currently pursuing a Bachelor's degree in Artificial <br /> Intelligence and Data Science."</p>
    <Link><button className="btn">
        <img src={btnImg} alt="" className='btnImg'/>Onboard Me</button></Link>
    </div>
    <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro