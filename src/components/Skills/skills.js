import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
    <div className="skillBars">    
    <span className="skillTitle">What I do</span><br />
    <span className="skillDesc">I am Aryan Jha, a 3rd year student specializing in Artificial Intelligence and Data Science at IIIT Manipur. My academic journey is marked by a strong passion for AI and data-driven solutions. Beyond academics, I have demonstrated significant leadership and teamwork skills, having served as the Contingent Leader for IIIT Manipur at the All India Inter IIIT Sports Meet, Asmita-24. Under my leadership, our team achieved remarkable success. Additionally, I led my house to win the House of the Year trophy, showcasing my dedication and ability to motivate and guide my peers. I am committed to continuous learning and excellence in both my academic and extracurricular endeavors.</span>
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>React Developer🚀</h2>
                    <p>"I have intermediate proficiency in React.js, JavaScript, and Bootstrap. I have developed several projects, including a Gemini clone."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Redesigned UI-IIIT Manipur </h2>
                    <p>"I have revamped the IIIT Manipur website, giving it a fresh and modern look."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web-Tech Club Co-Lead</h2>
                    <p>"Contributing to Web development projects and initiatives."</p>
                </div>
            </div>
    </div>
    </section>
  )
}

export default Skills;