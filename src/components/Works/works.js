import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio1.jpeg";
import Portfolio2 from "../../assets/portfolio2.jpeg";
import Portfolio3 from "../../assets/portfolio3.jpeg";
import Portfolio4 from "../../assets/portfolio4.jpeg";

function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">Experience's</h2>
      <span className="worksDesc">
        "I possess varied experience in web development, collaborating with
        NGOs, and demonstrating leadership in sports, showcasing versatility and
        adaptability."
      </span>
      <div className="wo rksImgs">
        <div className="exp">
          <img src={Portfolio1} alt="" className="worksImg" />
          <div>
          <h3>Sports Secretary</h3><br />
          <p>Represented IIIT Manipur as the Contingent Leader at the All India Inter IIIT Sports Meet, Asmita-24</p>
          </div>
        </div>
        <div className="exp">
          <img src={Portfolio2} alt="" className="worksImg" />
          <div>
          <h3>Kaveri Representative</h3><br />
          <p>Represented the Kaveri house and won the House of the Year trophy.</p>
          </div>
        </div>
        <div className="exp">
          <img src={Portfolio3} alt="" className="worksImg" />
          <div>
          <h3>InAmigos Foundation · Internship</h3><br />
          <p>Community Volunteer</p>
          </div>
        </div>
        <div className="exp">
          <img src={Portfolio4} alt="" className="worksImg" />
          <div>
          <h3>NayePankh Foundation · Internship</h3><br />
          <p>Community Influencer </p>
          </div>
        </div>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
