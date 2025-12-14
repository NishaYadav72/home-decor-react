import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye } from "@fortawesome/free-solid-svg-icons";

import aboutBanner from "../assets/images/AboutBannerImage.jpeg";
import sideImg from "../assets/images/service8.jpg";
import mainImg from "../assets/images/service9.jpg";
import aboutRight from "../assets/images/aboutRight.jpg";
import aboutLeft from "../assets/images/aboutlrft.jpg";
import team1 from "../assets/images/AboutTeamImage1.webp";
import team2 from "../assets/images/AboutTeemImage2.webp";
import team3 from "../assets/images/AboutTeemImage3.jpg";
import team4 from "../assets/images/AboutTeamImage4.jpg";

/* ✅ MISSING STYLES — YAHI GALTI THI */
const teamCardStyle = {
  background: "#fafafa",
  padding: "25px 20px",
  width: "260px",
  borderRadius: "15px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  transition: "0.3s",
};

const teamImgStyle = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
};
const About = () => {
  return (
    <>
      {/* 🔹 Hero Banner */}
      <div className="hero-banner" style={{ marginBottom: "60px" }}>
        <img src={aboutBanner} alt="About Banner" />
        <div className="hero-banner-text">
          <h1>About Our Company</h1>
          <p>Creative • Reliable • Experienced</p>
        </div>
      </div>

      {/* 🔹 Blur Layout Section */}
      <section className="blur-layout" style={{ marginTop: "60px" }}>
        {/* Left Content */}
        <div className="left-content">
          <h2 style={{ color: "darkgoldenrod" }}>Interior Design Ideas</h2>
          <p>
            Your living room is probably one of the first spaces someone <br />
            sees when they enter your home, meaning there's a lot of pressure <br />
            to make it look perfect. To help you do just that, Insider spoke with <br />
            four interior designers.
          </p>
        </div>

        {/* Right Images */}
        <div className="right-blur">
          <img src={sideImg} alt="Side" className="side-img" />
          <img src={mainImg} alt="Main" className="main-img" />
        </div>
      </section>

      {/* 🔹 Internal CSS */}
      <style>{`
        .hero-banner {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .hero-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }

        .hero-banner-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: black;
          text-align: center;
        }

        .hero-banner-text h1 {
          font-size: 50px;
          margin-bottom: 10px;
        }

        .hero-banner-text p {
          font-size: 20px;
        }

        .blur-layout {
          display: flex;
          flex-wrap: wrap;
          min-height: 500px;
          width: 100%;
          overflow: hidden;
        }

        .left-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 40px;
          background: #fff;
        }

        .left-content h2 {
          font-size: 38px;
          margin-bottom: 20px;
        }

        .left-content p {
          font-size: 18px;
          color: #444;
          line-height: 1.7;
        }

        .right-blur {
          flex: 1;
          position: relative;
          background: lightgrey;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          padding: 90px 10px;
        }

        .side-img {
          width: 280px;
          height: 380px;
          object-fit: cover;
          border: 4px solid white;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          position: absolute;
          left: -60px;
          bottom: 30px;
          z-index: 2;
          border-left: none;
        }

        .main-img {
          width: 300px;
          height: 380px;
          object-fit: cover;
          border: 4px solid white;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          margin-right: 140px;
        }

        @media (max-width: 768px) {
          .blur-layout {
            flex-direction: column;
          }

          .left-content {
            align-items: center;
            text-align: center;
            padding: 30px 20px;
          }

          .right-blur {
            align-items: center;
            padding: 30px 20px;
          }

          .side-img,
          .main-img {
            position: static;
            width: 80%;
            height: auto;
            margin: 10px 0;
          }
        }
      `}</style>

      {/* 🔸 Alternating Content & Image Section */}
<section style={{ padding: "60px 20px", backgroundColor: "#f7f7f7" }}>
  
  {/* First Row */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "40px",
      marginBottom: "60px",
    }}
  >
    {/* Left Content */}
    <div style={{ flex: "1 1 500px" }}>
      <h2 style={{ fontSize: "28px", color: "darkgoldenrod", marginBottom: "15px" }}>
        Elegant Designs Tailored for You
      </h2>
      <p style={{ fontSize: "16px", color: "#444", textAlign: "justify" }}>
        At <strong>Home Decor Interiors</strong>, we believe that a home should
        reflect your personality, values, and lifestyle. Our team works with
        precision and creativity to turn ordinary rooms into extraordinary
        spaces. Whether it's a modern kitchen, cozy bedroom, or luxurious living
        area – we make every corner count.
      </p>
    </div>

    {/* Right Image */}
    <div style={{ flex: "1 1 500px" }}>
      <img
        src={aboutRight}
        alt="Elegant Interior Design"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </div>
  </div>

  {/* Second Row (Reverse) */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "40px",
      flexDirection: "row-reverse",
    }}
  >
    {/* Content */}
    <div style={{ flex: "1 1 500px" }}>
      <h2 style={{ fontSize: "28px", color: "darkgoldenrod", marginBottom: "15px" }}>
        Craftsmanship Meets Innovation
      </h2>
      <p style={{ fontSize: "16px", color: "#444", textAlign: "justify" }}>
        From selecting the right textures and lighting to optimizing layout and
        flow, our design philosophy blends creativity with functionality. With
        years of experience and a deep understanding of client needs, we bring
        spaces to life with elegance, efficiency, and style.
      </p>
    </div>

    {/* Image */}
    <div style={{ flex: "1 1 500px" }}>
      <img
        src={aboutLeft}
        alt="Modern Interior Work"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </div>
  </div>
</section>

<section
  className="team-section"
  style={{
    padding: "30px 10px",
    backgroundColor: "white",
  }}
>
  <h2
    className="team-title"
    style={{
      textAlign: "center",
      fontSize: "36px",
      color: "#222",
      marginBottom: "5px",
    }}
  >
    The Team
  </h2>
  <p
    className="team-subtitle"
    style={{
      textAlign: "center",
      fontSize: "22px",
      color: "darkgoldenrod",
      marginBottom: "40px",
    }}
  >
    Our Experts
  </p>

  <div
    className="team-container"
    style={{
      display: "flex",
      flexWrap: "nowrap", // ✅ Wrap remove kiya
      justifyContent: "space-between",
      gap: "20px",
      maxWidth: "1200px",
      margin: "auto",
      backgroundColor: "lightgray",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    {[team1, team2, team3, team4].map((img, index) => {
      const names = ["John Deo", "Jenny Smith", "George Doe", "Maria Jay"];
      const roles = [
        "Lead Architect",
        "Head Engineer (US)",
        "Head Engineer (CN)",
        "Head Engineer (AU)",
      ];
      return (
        <div
          key={index}
          className="team-member"
          style={{
            flex: "0 0 23%", // ✅ 4 cards ek row me
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <img
            src={img}
            alt={names[index]}
            style={{
              width: "100%",
              maxWidth: "230px",
              height: "230px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          />
          <h3 style={{ margin: 0, fontSize: "20px" }}>{names[index]}</h3>
          <p style={{ color: "#777", fontSize: "16px" }}>{roles[index]}</p>
        </div>
      );
    })}
  </div>

  {/* 🔹 Responsive Styles */}
  <style>{`
    @media (max-width: 1199px) and (min-width: 768px) {
      .team-container {
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .team-container > div {
        flex: 0 0 48%;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 767px) {
      .team-container {
        flex-direction: column;
        align-items: center;
      }
      .team-container > div {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 20px;
      }
    }
  `}</style>
</section>

 {/* ✅ Render VisionMission */}
      <VisionMission />




    </>
  );
};


const VisionMission = () => {
  return (
    <section style={{ padding: "60px 20px", backgroundColor: "lightblue" }}>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        {/* Top Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            color: "black",
            marginBottom: "40px",
          }}
        >
          Best Interior Company In Patna
        </h2>

        {/* Grid Container */}
        <div className="vision-mission-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
          {/* Vision */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faEye}
              style={{ fontSize: "90px", color: "darkgoldenrod", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "22px", color: "#333" }}>Our Vision</h3>
            <p style={{ fontSize: "16px", color: "#555", textAlign: "justify" }}>
              At <strong>Home Decor Interior</strong>, we aspire to make every project a masterpiece that stands the test of time. We envision a world where every space tells a unique story, blending creativity, functionality, and innovation to reflect individuality and purpose.
            </p>
          </div>

          {/* Mission */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faBullseye}
              style={{ fontSize: "90px", color: "darkgoldenrod", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "22px", color: "#333" }}>Our Mission</h3>
            <p style={{ fontSize: "16px", color: "#555", textAlign: "justify" }}>
              Our mission is to transform spaces into inspiring, functional, and aesthetically captivating environments that reflect our clients’ unique personality and lifestyle. Through meticulous attention to detail and a passion for design, we aim to make every project a masterpiece that enhances lives and redefines the art of living.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .vision-mission-grid {
            grid-template-columns: 1fr !important; /* Stack vertically on small screens */
          }
        }
      `}</style>
    </section>
  );
};




export default About;
