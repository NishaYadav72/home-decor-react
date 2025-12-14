import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDraftingCompass, 
  faCouch, 
  faComments, 
  faHardHat, 
  faHouseUser, 
  faPencilRuler 
} from "@fortawesome/free-solid-svg-icons";

// Images
import firstImage from "../assets/images/firstImage.jpg";
import secondImage from "../assets/images/secondImage.avif";
import thirdImage from "../assets/images/thirdImage.jpg";
import mainImage from "../assets/images/weWork.webp";
import overlayImage from "../assets/images/secondsmall.jpg";

// Brand logos imports (TOP PAR)
import anchor from "../assets/images/anchor.png";
import asianpaints from "../assets/images/asianpaints.png";
import berger from "../assets/images/berger.png";
import ebco from "../assets/images/ebco.png";
import elica from "../assets/images/elica.png";
import hettick from "../assets/images/hettick.png";
import eglu from "../assets/images/eglu.png";
import excel from "../assets/images/excel.png";
import faber from "../assets/images/faber.png";
import finolex from "../assets/images/finolex.png";


// 🔹 Images
import bedroomImage from "../assets/images/bedroomImage.jpg";
import livingroomImage from "../assets/images/livingroomImage.webp";
import modularkitcenImage from "../assets/images/modularkitcenImage.avif";
import fasleceilingImage from "../assets/images/fasleceilingImage.jpg";
import tvunitImage from "../assets/images/tvunitImage.jpg";
import studroomImage from "../assets/images/studroomImage.jpg";
import kidsroomImage from "../assets/images/kidsroomImage.jpg";
import wardrobeImage from "../assets/images/wardrobeImage.jpg";



import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Images import
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.webp";
import client3 from "../assets/images/client3.webp";
import "./Home.css";

// Slides data
const slidesData = [
  {
    img: firstImage,
    title: (
      <>
        Providing Best <br /> <span>Home</span> Interior
      </>
    ),
    desc: "15+ years of experience in interior design",
    link: "/contact"
  },
  {
    img: secondImage,
    title: (
      <>
        Creative <br /> <span>Modular Kitchen</span>
      </>
    ),
    desc: "Transform your cooking space with style and functionality.",
    link: "/contact"
  },
  {
    img: thirdImage,
    title: (
      <>
        Modern <br /> <span>Living Rooms</span>
      </>
    ),
    desc: "We create living areas that combine comfort and elegance.",
    link: "/contact"
  }
];

// Services data
const servicesData = [
  {
    icon: faDraftingCompass,
    title: "Architectural Design",
    desc: "Dream it, we’ll design it! From layouts to details, we bring your ideas to life with creativity and precision!"
  },
  {
    icon: faCouch,
    title: "Interior Design & Planning",
    desc: "Make your space shine! We create beautiful interiors that reflect your style and make every room a favorite place."
  },
  {
    icon: faComments,
    title: "Consulting Services",
    desc: "We offer expert design advice to make your project sparkle with smart, creative, and efficient solutions."
  },
  {
    icon: faHardHat,
    title: "Project Management",
    desc: "From start to finish, we handle everything — keeping your project on track, on budget, and stress-free."
  }
];

// Easy Working Steps data
const stepsData = [
  {
    icon: faHouseUser,
    number: 1,
    title: "Visit Project",
    desc: "Transform your space with our expert interior design services visit us today for a consultation"
  },
  {
    icon: faDraftingCompass,
    number: 2,
    title: "Planning Design",
    desc: "Let us bring your vision to life with thoughtful and tailored planning design solutions for your space."
  },
  {
    icon: faPencilRuler,
    number: 3,
    title: "Project Sketch",
    desc: "Bring your ideas to life with our detailed project sketches — the perfect blueprint for your space."
  },
  {
    icon: faHouseUser,
    number: 4,
    title: "Start Working",
    desc: "Start working with us today and watch your dream space transform with precision and passion."
  }
];

// Why Choose Section
const WhyChooseSection = () => {
  const stats = [
    { value: "100+", label: "Happy Clients", color: "darkgoldenrod" },
    { value: "10", label: "Expert Designers", color: "#333" },
    { value: "200+", label: "Projects Delivered", color: "goldenrod" },
    { value: "5★", label: "Top Rated Services", color: "#555" },
  ];

  return (
    <section
      style={{
        background: "radial-gradient(circle, #fefefe, #f1f1f1)",
        padding: "80px 20px 0",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          color: "#222",
          marginBottom: "20px",
          fontWeight: 700,
          fontStyle: "italic",
        }}
      >
        Why Choose Home Decor?
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "800px",
          margin: "0 auto 60px",
          lineHeight: 1.6,
        }}
      >
        We believe in designing homes that speak elegance, comfort, and purpose. Here's what makes us the best in the business.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              flex: "1 1 200px",
              maxWidth: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "108px",
                background: `linear-gradient(to right, ${stat.color}, goldenrod, #444)`,
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                borderRadius: "10px",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                width: "140px",
                height: "140px",
                backgroundColor: stat.color,
                color: "white",
                borderRadius: "50%",
                fontSize: "34px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                marginTop: "-70px",
                zIndex: 2,
              }}
            >
              {stat.value}
            </div>
            <p style={{ marginTop: "15px", fontSize: "16px", color: "#333", fontWeight: 600, zIndex: 2 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Easy Working Steps Component
const EasyWorkingSteps = () => {
  return (
    <section style={{ backgroundColor: "black", padding: "60px 20px" }}>
      <p style={{ textAlign: "center", fontSize: "22px", color: "darkgoldenrod", marginBottom: "5px" }}>
        How We Work
      </p>
      <h2 style={{ fontSize: "36px", color: "#fff", textAlign: "center", marginBottom: "50px" }}>
        Our Easy Working Steps
      </h2>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "40px", maxWidth: "1200px", margin: "auto" }}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 250px",
              textAlign: "center",
              color: "#ccc",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "#111",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ position: "relative", marginBottom: "15px" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  backgroundColor: "darkgoldenrod",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  fontSize: "28px",
                  color: "#000",
                  position: "relative"
                }}
              >
                <FontAwesomeIcon icon={step.icon} />
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold"
                  }}
                >
                  {step.number}
                </div>
              </div>
            </div>
            <h3 style={{ fontSize: "20px", color: "darkgoldenrod", marginBottom: "10px" }}>{step.title}</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Home Interiors Component
const HomeInteriors = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to right, #fff1f5, #ffe4ec)",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
      }}
    >
      <style>{`
        .interior-wrapper {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          max-width: 1200px;
          margin: auto;
          gap: 100px;
        }
        .interior-left, .interior-right {
          flex: 1 1 500px;
        }
        .interior-left img {
          width: 100%;
          border-radius: 12px;
        }
        .interior-right h2 {
          font-size: 36px;
          margin-bottom: 15px;
        }
        .interior-right p {
          font-size: 17px;
          margin-bottom: 30px;
          color: #555;
        }
        .interior-right a {
          background: darkgoldenrod;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .interior-wrapper {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="interior-wrapper">
        <div className="interior-left">
          <img src={thirdImage} alt="Home Interior" /> {/* <- yaha import ka use */}
        </div>

        <div className="interior-right">
          <h2>Home Interiors</h2>
          <p>
            Exceptional designs that cater to your aesthetic,
            <br />
            functional and aspirational goals.
          </p>
          <Link to="/contact">Book Free Consultation</Link>
        </div>
      </div>
    </section>
  );
};


// 🔹 Brand Partners Component
const BrandPartners = () => {
  const logos = [
    anchor,
    asianpaints,
    berger,
    ebco,
    elica,
    hettick,
    eglu,
    excel,
    faber,
    finolex,
  ];

  const allLogos = [...logos, ...logos];

  return (
    <section
      style={{
        background: "#f9f9f9",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}>
        Our Brand Partners
      </h2>

      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
        An elite list of partners who strengthen our brand promise
      </p>

      <div style={{ overflow: "hidden" }}>
        <div className="scroll-track">
          {allLogos.map((logo, index) => (
            <div className="brand-logo" key={index}>
              <img src={logo} alt="Brand" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scroll-track {
          display: flex;
          gap: 40px;
          animation: scroll-left 25s linear infinite;
        }

        .brand-logo {
          min-width: 160px;
          height: 100px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .brand-logo img {
          max-width: 100%;
          max-height: 70px;
          object-fit: contain;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};


const ServicesSection = () => {
  return (
    <>
      {/* 🔹 Our Services Gallery Section */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "lightgrey",
          fontFamily: "'Segoe UI', Tahoma, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            color: "black",
            marginBottom: "40px",
          }}
        >
          Our Services
        </h2>

        <div className="services-row">
          <ServiceBox image={bedroomImage} title="Bedroom" />
          <ServiceBox image={livingroomImage} title="Living Hall" />
          <ServiceBox image={modularkitcenImage} title="Modular Kitchen" />
          <ServiceBox image={fasleceilingImage} title="False Ceiling" />
          <ServiceBox image={tvunitImage} title="TV Unit" />
          <ServiceBox image={studroomImage} title="Study Room" />
          <ServiceBox image={kidsroomImage} title="Kids Room" />
          <ServiceBox image={wardrobeImage} title="Wardrobe" />
        </div>
      </section>

      {/* 🔹 Styles */}
      <style>{`
        .services-row {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          max-width: 1300px;
          margin: auto;
        }

        .service-box {
          width: 280px;
          background: #fff;
          border: 4px solid white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .service-box img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .service-box h3 {
          font-size: 18px;
          margin: 15px 0;
          color: #222;
        }

        .service-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .service-box {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};


const BusinessIntroSection = () => {
  return (
    <section style={{ background: "#fff", padding: "40px 20px", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", maxWidth: "1200px", margin: "auto", flexWrap: "wrap" }}>

        {/* 🔹 Business Intro */}
        <div style={{ flex: "1 1 350px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "darkgoldenrod", marginBottom: "10px" }}>
            We Are Business Who Cares, And it Shows
          </h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Over 540 “5 STARS” Reviews and Climbing
          </p>
        </div>

        {/* 🔸 Vertical Line */}
        <div style={{ width: "2px", height: "80px", background: "linear-gradient(to bottom, #ccc, #999)", borderRadius: "1px" }}></div>

        {/* 🔹 Yelp */}
        <div style={{ flex: "1 1 300px", display: "flex", alignItems: "center", gap: "15px" }}>
          <FontAwesomeIcon icon={faStarHalfAlt} style={{ fontSize: "70px", color: "#d32323" }} />
          <div>
            <h4 style={{ fontSize: "16px", margin: 0 }}>Rate Us on Yelp</h4>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "2px 0 0" }}>248 Reviews</p>
          </div>
        </div>

        {/* 🔸 Vertical Line */}
        <div style={{ width: "2px", height: "80px", background: "linear-gradient(to bottom, #ccc, #999)", borderRadius: "1px" }}></div>

        {/* 🔹 Google */}
        <div style={{ flex: "1 1 300px", display: "flex", alignItems: "center", gap: "15px" }}>
          <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "70px", color: "#4285F4" }} />
          <div>
            <h4 style={{ fontSize: "16px", margin: 0 }}>Rate Us on Google</h4>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "2px 0 0" }}>1,248 Reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
};



const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Singh",
      location: "Patna",
      text: "“Elegant Interiors made my dream living room come true! They’re exceptional.”",
      img: client1,
      borderColor: "darkgoldenrod",
      cardClass: "card-yellow",
    },
    {
      name: "Sneha Rani",
      location: "Boring Road",
      text: "“My kitchen makeover was perfect. Clean finish and beautiful style!”",
      img: client2,
      borderColor: "teal",
      cardClass: "card-blue",
    },
    {
      name: "Deepak Jha",
      location: "Kankarbagh",
      text: "“Highly recommended! On time, beautiful design, and amazing execution.”",
      img: client3,
      borderColor: "crimson",
      cardClass: "card-pink",
    },
  ];

  return (
    <section style={{ background: "linear-gradient(to bottom, #f7f7f7, #ffffff)", padding: "80px 20px", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
      <h2 style={{ textAlign: "center", fontSize: "38px", color: "#222", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}>
        What Our Clients Say
      </h2>
      <p style={{ textAlign: "center", fontSize: "16px", color: "#555", maxWidth: "850px", margin: "0 auto 50px", lineHeight: 1.6 }}>
        Real reviews from our happy clients across Bihar.
      </p>

      <div className="testimonial-container" style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", maxWidth: "1200px", margin: "auto" }}>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`testimonial-card ${t.cardClass}`}
            style={{
              flex: "1 1 300px",
              maxWidth: "340px",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
              transition: "all 0.4s ease",
              border: "2px solid #ddd",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              backgroundColor: t.cardClass === "card-yellow" ? "lightgrey" : "lightgray",
            }}
          >
            <img src={t.img} alt={t.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px", border: `3px solid ${t.borderColor}` }} />
            <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.6, marginBottom: "15px" }}>{t.text}</p>
            <h4>{t.name}</h4>
            <small>{t.location}</small>
            <div className="testimonial-social" style={{ marginTop: "10px" }}>
              <a href="#" style={{ margin: "10px 8px 0", color: "#555", fontSize: "18px", transition: "color 0.3s ease", display: "inline-block" }}><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" style={{ margin: "10px 8px 0", color: "#555", fontSize: "18px", transition: "color 0.3s ease", display: "inline-block" }}><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" style={{ margin: "10px 8px 0", color: "#555", fontSize: "18px", transition: "color 0.3s ease", display: "inline-block" }}><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



// 🔹 Reusable Service Card
const ServiceBox = ({ image, title }) => {
  return (
    <div className="service-box">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};


// Home Component
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slidesData.length;

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => moveSlide(1), 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO SLIDER */}
      <div className="hero-slider">
        <div className="arrow arrow-left" onClick={() => moveSlide(-1)}>
          &#10094;
        </div>
        <div className="arrow arrow-right" onClick={() => moveSlide(1)}>
          &#10095;
        </div>

        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slidesData.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <Link to={slide.link} className="hero-btn">
                  Contact Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

     <div className="request-wrapper">
  <div className="request-container">
    <span style={{ color: "darkgoldenrod", fontSize: "18px" }}>
      Quick Service Request
      <br />
      <span style={{ fontSize: "21px", color: "darkslategrey", fontWeight: "bold" }}>
        Send Inspection Request
      </span>
    </span>
    <input type="text" placeholder="Enter your full name" />
    <input type="tel" placeholder="Phone number" />
    <button type="submit">Send</button>
  </div>
</div>


      {/* WHO WE SECTION */}
      <section style={{ padding: "60px 20px", backgroundColor: "#fdf4e3" }}>
        <div className="who-we-section">
          <h3>
            Experience <span>The Art of Interior</span> Design
          </h3>
          <p className="intro">
            We specialize in transforming visions into reality.
            <br />
            Explore our portfolio of innovative architectural and interior design projects crafted with precision.
          </p>

          <div className="card-row">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <FontAwesomeIcon icon={service.icon} style={{ color: "darkgoldenrod", fontSize: "40px", marginBottom: "10px" }} />
                <h4>{service.title}</h4>
                <div className="underline"></div>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ABOUT SECTION */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "40px", padding: "60px 20px", alignItems: "center", justifyContent: "center", backgroundColor: "#222" }}>
        <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          <h3 style={{ fontSize: "36px", marginBottom: "25px", fontWeight: 700, lineHeight: 1.3, color: "#fff" }}>
            Where Spaces{" "}
            <span style={{ color: "darkgoldenrod" }}>
              Inspire,
              <br />
              and Design
            </span>{" "}
            Comes Alive
          </h3>

          <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px", fontSize: "17px", lineHeight: 1.9, color: "#fff" }}>
            <li>✅ Started In 1991</li>
            <li>✅ Latest Technologies</li>
            <li>✅ 5 Years Warranty</li>
            <li>✅ High-Quality Designs</li>
            <li>✅ Residential Design</li>
          </ul>

          <p style={{ fontSize: "15.5px", lineHeight: 1.7, marginBottom: "30px", color: "#ddd" }}>
            Whether it’s your home, office, or a commercial project,
            <br />
            we are always dedicated to bringing your vision to life.
            <br />
            <span style={{ color: "#fff" }}>Our numbers speak better than words.</span>
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "12px 25px",
              backgroundColor: "darkgoldenrod",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "30px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(255,255,255,0.2)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ffcc00";
              e.target.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "darkgoldenrod";
              e.target.style.color = "#000";
            }}
          >
            More About Us
          </a>
        </div>

        <div style={{ flex: "1 1 400px", maxWidth: "650px", textAlign: "center", position: "relative", overflow: "visible" }}>
          <div style={{ position: "relative", borderRadius: "12px", border: "5px solid #fff", boxShadow: "0 12px 24px rgba(0,0,0,0.4)", overflow: "visible" }}>
            <img src={mainImage} alt="Service Image" style={{ width: "100%", display: "block", borderRadius: "12px" }} />
            <img
              src={overlayImage}
              alt="Overlay Box"
              style={{
                position: "absolute",
                bottom: "-80px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400px",
                height: "250px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                background: "#fff",
                border: "4px solid #fff",
                borderRadius: "8px"
              }}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <WhyChooseSection />

      <EasyWorkingSteps/>
      
      {/* HOME INTERIORS SECTION */}
      <HomeInteriors />

      {/* BRAND PARTNERS SECTION */}
      <BrandPartners />

      {/* ✅ OUR SERVICES */}
      <ServicesSection />
      <BusinessIntroSection />

      <Testimonials />

      
    </div>

  );
};

export default Home;
