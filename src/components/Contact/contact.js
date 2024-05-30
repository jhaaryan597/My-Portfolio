import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef (); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91mjxh4', 'template_chnel59', form.current,'mEtA24ORJReFnTs7M')
      .then((result)=>{
        console.log(result.text);
        e.target.reset();
        alert('Email sent!');
      }, (error)=>{
        console.log(error.text);
      });
  };  

  return (
    <section className="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">Achievements</h1>
            <p className="clientDesc"><hr /></p>
            <div className="clientImgs">
            <h3>General Sports Secretary-IIIT Manipur</h3>        
            </div>
            <div className="clientImgs">
            <h3>Contigent Leader-Asmita'24</h3>
            </div>
            <div className="clientImgs">
            <h3>Jee Mains-95.4%ile</h3>
            </div>
        </div>
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">"Feel free to reach out to me at aryanjha597@iiitmanipur.ac.in <br /> I look forward to connecting with you!"</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className='email' placeholder='Your Email' name='your_email' />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>

          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form> 
        </div>
    </section>
  )
} 

export default Contact