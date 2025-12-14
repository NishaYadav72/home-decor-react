import React, { useState, useEffect } from "react";
import serviceBanner from "../assets/images/service11.jpg";
import extraBanner from "../assets/images/service10.webp";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";
import service5 from "../assets/images/service5.jpg";
import service6 from "../assets/images/service6.jpg";
import service7 from "../assets/images/service7.jpg";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faRulerCombined,
  faHome,
  faPaintRoller,
  faDraftingCompass,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const processCards = [
  {
    img: service2,
    title: "Trusting the process",
    desc: "We have developed over the last 20 years is key to creating a space that resonates with you and is executed in a seamless way.",
    processes: [
      {
        title: "Defines",
        content: [
          "— Our process is designed to create a “narrative” for your space...",
          "— Interview decision makers and contributors.",
          "— Questionnaire captures your preferences and feelings.",
        ],
      },
      {
        title: "Ideate (Design)",
        content: [
          "— We redefine design standards.",
          "— You get two directions with 3D renderings and material palette.",
          "— Focus on high-quality, sustainable, handmade materials.",
        ],
      },
      {
        title: "Delivery",
        content: [
          "— We provide permit-ready drawings.",
          "— Full project management from start to finish.",
          "— Strong collaborations and vendor network for top results.",
        ],
      },
    ],
    reverse: false,
  },
  {
    img: service3,
    title: "Residential Design Services",
    desc: "Our philosophy, defined as Warm Minimalism is a thread that runs through most of our projects and our clients sensibilities. Our work ranges from new construction, custom home design, gut renovations, kitchen/bath renovations and furniture only projects.",
    processes: [
      {
        title: "Process",
        content: [
          "— Program Development",
          "— The narrative as described above to gain a clear understanding our clients brand",
          "— Design concepts, Ideation, 3d renderings and construction drawings for permits, pricing and construction",
        ],
      },
      {
        title: "Client Type",
        content: [
          "— We work with our clients, their marketing team and key decision makers to strategize and create a cohesive brand image throughout the marketing materials and physical space.",
          "— We work with Architects, Engineers and Consultants to ensure all aspects of the project are well thought out and planned for to create a successful space, stay on budget and on schedule.",
        ],
      },
      {
        title: "Our Experience",
        content: [
          "— Our portfolio of work has included Corporate Interiors, Academic Institutions, Breweries, Restaurant Design, Hotel Interiors, Cruise Ships, Gyms, Spas, and Retail spaces as part of ID8 and experience gained as a team member in design firms we have worked at prior to ID8.",
        ],
      },
    ],
    reverse: true,
  },
  {
    img: service4,
    title: "Residential Design Services",
    desc: "Our philosophy, defined as Warm Minimalism is a thread that runs through most of our projects and our clients sensibilities. Our work ranges from new construction, custom home design, gut renovations, kitchen/bath renovations and furniture only projects.",
    processes: [
      {
        title: "Process",
        content: [
          "— The “narrative” as described above to gain a clear understanding our clients goals.",
          "— Design concepts, 3d renderings and construction drawings for permits, pricing and construction.",
        ],
      },
      {
        title: "Collaborations",
        content: [
          "We collaborate with Architects, Engineers and Consultants on larger projects to ensure the highest standard of design and excellence.",
          "— Long-lasting materials, timeless styles.",
        ],
      },
    ],
    reverse: false,
  },
];

const services = [
  { icon: faCouch, title: "Furniture Design", desc: "Sample text for furniture design.", bg: "#fff5e6" },
  { icon: faRulerCombined, title: "Interior Design", desc: "Sample text for interior design.", bg: "#f0f9ff" },
  { icon: faHome, title: "House Staging", desc: "Sample text for house staging.", bg: "#f9f0ff" },
  { icon: faPaintRoller, title: "Sample Headline", desc: "Sample text.", bg: "#e8fce8" },
  { icon: faDraftingCompass, title: "Sample Headline", desc: "Sample text.", bg: "#fff0f0" },
  { icon: faTools, title: "Sample Headline", desc: "Sample text.", bg: "#fef9e7" },
];

const slides = [service5, service6, service7];

const ServicePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Toggle Accordion
  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Grid columns
  const getGridColumns = () => {
    if (windowWidth <= 600) return "1fr";
    if (windowWidth <= 992) return "1fr 1fr";
    return "1fr 1fr 1fr";
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{ position: "relative", width: "100%", height: windowWidth < 768 ? "350px" : "500px" }}>
        <img src={serviceBanner} alt="Services Banner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "left",
          paddingLeft: windowWidth < 768 ? "20px" : "80px",
        }}>
          <h1 style={{ fontSize: windowWidth < 768 ? "32px" : "48px", margin: 0, color: "white" }}>Our Services</h1>
          <p style={{ fontSize: windowWidth < 768 ? "20px" : "35px", marginTop: "10px", color: "white" }}>
            Transforming your space with creativity and expertise.
          </p>
        </div>
        <img src={extraBanner} alt="Extra Banner" style={{
          position: "absolute",
          bottom: windowWidth < 768 ? "-60px" : "-80px",
          right: windowWidth < 768 ? "20px" : "40px",
          width: windowWidth < 768 ? "250px" : "400px",
          height: windowWidth < 768 ? "300px" : "450px",
          border: "5px solid darkgoldenrod",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }} />
      </div>

      {/* Interior Design Process */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f4f4f4" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", color: "#222", marginBottom: "50px", fontStyle: "italic" }}>Interior Design Process</h2>
        <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", flexDirection: "column", gap: "40px" }}>
          {processCards.map((card, cardIndex) => (
            <div key={cardIndex} style={{
              display: "flex",
              flexDirection: windowWidth < 768 ? "column" : card.reverse ? "row-reverse" : "row",
              background: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
              <div style={{ flex: 1 }}>
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "450px", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontSize: "18px", color: "#333", marginBottom: "30px" }}>
                  <strong style={{ color: "darkgoldenrod", fontSize: "25px" }}>{card.title}</strong> {card.desc}
                </p>
                {card.processes.map((proc, index) => (
                  <div key={index} style={{ marginBottom: "25px" }}>
                    <h3 onClick={() => toggleContent(`${cardIndex}-${index}`)} style={{ fontSize: "20px", color: "#444", fontWeight: 600, display: "flex", alignItems: "center", cursor: "pointer" }}>
                      {proc.title}
                      <span style={{ marginLeft: "10px", fontSize: "26px", fontWeight: "bold", color: "darkgoldenrod" }}>{activeIndex === `${cardIndex}-${index}` ? "-" : "+"}</span>
                      <hr style={{ flex: 1, minWidth: "100px", marginLeft: "10px", border: "1px solid #aaa" }} />
                    </h3>
                    {activeIndex === `${cardIndex}-${index}` && (
                      <div style={{ marginTop: "15px", paddingLeft: "10px", color: "#333", fontSize: "16px" }}>
                        {proc.content.map((c, i) => (<p key={i} style={{ marginBottom: "10px", lineHeight: 1.6 }}>{c}</p>))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "40px", fontWeight: 700, color: "#222", fontStyle: "italic" }}>What We Do</h2>
          <div style={{ display: "grid", gridTemplateColumns: getGridColumns(), gap: "30px" }}>
            {services.map((service, index) => (
              <div key={index} style={{
                borderRadius: "10px",
                padding: "30px 20px",
                backgroundColor: service.bg,
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <h4 style={{
                  fontSize: "28px",
                  marginBottom: "15px",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px"
                }}>
                  <FontAwesomeIcon icon={service.icon} style={{ color: "darkgoldenrod", fontSize: "48px" }} /> {service.title}
                </h4>
                <p style={{ fontSize: "15px", color: "#333", lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zigzag Section / Transform Your Space */}
      <section style={{ padding: "60px 20px", maxWidth: "1300px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "50px", fontWeight: 700, color: "#222", fontStyle: "italic" }}>Transform Your Space</h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: "60px", gap: "20px" }}>
          <div style={{ flex: "1 1 300px" }}><img src={service5} alt="Slide 1" style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }} /></div>
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <FontAwesomeIcon icon={faCouch} style={{ fontSize: "48px", color: "darkgoldenrod", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Linda Hudson</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.6 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
            </div>
          </div>
          <div style={{ flex: "1 1 300px" }}><img src={service6} alt="Slide 2" style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }} /></div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <FontAwesomeIcon icon={faPaintRoller} style={{ fontSize: "48px", color: "darkgoldenrod", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Jennie Clarke</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.6 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
            </div>
          </div>
          <div style={{ flex: "1 1 300px" }}><img src={service7} alt="Slide 3" style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }} /></div>
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <FontAwesomeIcon icon={faRulerCombined} style={{ fontSize: "48px", color: "darkgoldenrod", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Hunter Norton</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.6 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
            </div>
          </div>
        </div>
      </section>




      {/* Interior Design Services Section */}
{/* Interior Design Services Section */}
<section
  style={{
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#222",
      marginBottom: "60px",
      fontStyle: "italic",
    }}
  >
    Our Interior Design Services in Patna
  </h2>

  <div
    style={{
      display: "grid",
      gap: "20px",
      gridTemplateColumns:
        windowWidth > 992
          ? "repeat(5, 1fr)"
          : windowWidth > 600
          ? "repeat(2, 1fr)"
          : "1fr",
    }}
  >
    {[
      {
        title: "Modular Kitchen",
        desc: "Transform your culinary space with efficient modular kitchen designs. Tailored for functionality and modern aesthetics.",
      },
      {
        title: "Bedroom Interiors",
        desc: "Personalized and cozy bedroom designs crafted for relaxation and style.",
      },
      {
        title: "Living Room Interiors",
        desc: "Stylish and comfortable living spaces ideal for family and guests.",
      },
      {
        title: "Modular Wardrobe",
        desc: "Organized, elegant wardrobe solutions that blend style with storage.",
      },
      {
        title: "Office Designs",
        desc: "Productive and motivating office interiors customized to your work style.",
      },
    ].map((service, index) => (
      <div
        key={index}
        style={{
          background: "#fffbea",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
          textAlign: "center",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "darkgoldenrod";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fffbea";
          e.currentTarget.style.color = "#000";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <h3
          style={{
            color: "darkgoldenrod",
            fontSize: "18px",
            marginBottom: "10px",
            transition: "color 0.3s ease",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#444",
            lineHeight: 1.6,
            transition: "color 0.3s ease",
          }}
        >
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>


{/* 🔻 CTA Section */}
<div
  style={{
    marginTop: "80px",
    textAlign: "center",
    background: "darkgoldenrod",
    padding: "50px 20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  }}
>
  <h3 style={{ fontSize: "26px", color: "#222", marginBottom: "15px" }}>
    We are ready to help you!
  </h3>
  <p style={{ fontSize: "18px", color: "#444", marginBottom: "25px" }}>
    Need any interior design help? Let’s connect and bring your vision to life.
  </p>
  <a
    href="/contact" // React me direct path
    style={{
      backgroundColor: "darkgrey",
      color: "#fff",
      padding: "12px 30px",
      textDecoration: "none",
      borderRadius: "6px",
      fontSize: "16px",
      transition: "background 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#555")}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "darkgrey")}
  >
    Contact Us
  </a>
</div>


    </div>
  );
};

export default ServicePage;
