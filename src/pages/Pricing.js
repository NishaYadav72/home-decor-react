import React from "react";
import pricingBanner from "../assets/images/pricingBanner.jpg"; // apni image ka path yahan lagao

const PricingPage = () => {
  const plans = [
    { name: "Free", price: "$0", features: ["1 Project", "Basic Support", "Limited Access"], buttonText: "Sign Up", bgColor: "#f8f8f8" },
    { name: "Standard", price: "$49", features: ["5 Projects", "Priority Support", "Full Access"], buttonText: "Get Started", bgColor: "#fff8e1" },
    { name: "Premium", price: "$99", features: ["Unlimited Projects", "24/7 Support", "All Features"], buttonText: "Go Premium", bgColor: "#ffe4ec" },
  ];

  const designs = [
    { title: "Modern Interiors", description: "Sleek and contemporary designs that fit your lifestyle.", color: "#ffe4ec" },
    { title: "Minimalist Spaces", description: "Clean, open, and clutter-free spaces to refresh your mind.", color: "#f8f8f8" },
    { title: "Luxury Decor", description: "Premium materials and design for the ultimate living experience.", color: "#fff8e1" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="pricing-banner">
        <img src={pricingBanner} alt="Pricing Banner" />
        <div className="banner-text">
          <h1 style={{color:"black"}}>Our Pricing Plans</h1>
          <p style={{color:"black"}}>Choose the plan that fits your needs perfectly</p>
        </div>
      </div>

      {/* Design Section */}
      <section style={{ padding: "60px 20px", background: "#f0f0f0", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Our Design Styles</h2>
          <p style={{ fontSize: "18px", color: "#555" }}>Explore our signature design styles that complement our pricing plans.</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", maxWidth: "1200px", margin: "auto" }}>
          {designs.map((design, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                backgroundColor: design.color,
                borderRadius: "15px",
                padding: "30px 20px",
                textAlign: "center",
                boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "darkgoldenrod" }}>{design.title}</h3>
              <p style={{ fontSize: "16px", color: "#333" }}>{design.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section style={{ padding: "80px 20px", fontFamily: "'Segoe UI', Tahoma, sans-serif", background: "#f5f5f5" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>Flexible Plans</h2>
          <p style={{ fontSize: "18px", color: "#555" }}>Upgrade anytime and choose the plan that suits your needs.</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", maxWidth: "1200px", margin: "auto" }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                backgroundColor: plan.bgColor,
                borderRadius: "15px",
                padding: "40px 20px",
                textAlign: "center",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
            >
              <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>{plan.name}</h3>
              <p style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "25px", color: "darkgoldenrod" }}>{plan.price}</p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: "12px", fontSize: "16px", color: "#333" }}>✅ {feature}</li>
                ))}
              </ul>
              <button
                style={{
                  backgroundColor: "darkgoldenrod",
                  color: "white",
                  padding: "12px 30px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8860b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "darkgoldenrod")}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Responsive CSS */}
      <style>{`
        .pricing-banner {
          position: relative;
          width: 100%;
          height: 450px; /* Desktop height */
          overflow: hidden;
        }

        .pricing-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .pricing-banner .banner-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
        }

        .pricing-banner .banner-text h1 {
          font-size: 48px;
          font-weight: bold;
        }

        .pricing-banner .banner-text p {
          font-size: 20px;
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .pricing-banner {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .pricing-banner {
            height: 300px;
          }
          .pricing-banner .banner-text h1 {
            font-size: 32px;
          }
          .pricing-banner .banner-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPage;
