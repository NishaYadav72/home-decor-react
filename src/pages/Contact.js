import React, { useState } from "react";
import contactBanner from "../assets/images/contactBnner.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div>
      {/* 🔹 Top Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "350px",
          overflow: "hidden",
        }}
      >
        <img
          src={contactBanner}
          alt="Contact Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "48px" }}>Contact Us</h1>
          <p style={{ fontSize: "20px" }}>We'd love to hear from you!</p>
        </div>
      </div>

      {/* 🔹 Contact Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "white" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {/* Left: Contact Form */}
          <div
            style={{
              flex: 1,
              background: "lightblue",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
              minWidth: "300px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                color: "darkgoldenrod",
                marginBottom: "30px",
              }}
            >
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="message"
                  style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
                >
                  Messages
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "darkgoldenrod",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Right: Contact Info Cards */}
          <div
            style={{
              flex: 1,
              background: "lightblue",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {/* Address */}
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <h3 style={{ color: "darkgoldenrod", marginBottom: "10px" }}>📍 Address</h3>
              <p style={{ margin: 0 }}>
                Boaring Road, Behind Santusti Sweet
                <br />
                Patna - 801503
              </p>
            </div>

            {/* Email */}
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <h3 style={{ color: "darkgoldenrod", marginBottom: "10px" }}>📧 Email Us</h3>
              <p style={{ margin: 0 }}>
                <a href="mailto:info@colorsinterior.in" style={{ color: "#333" }}>
                  info@interior.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <h3 style={{ color: "darkgoldenrod", marginBottom: "10px" }}>📞 Phone Number</h3>
              <p style={{ margin: 0 }}>
                +91 7654329876
                <br />
                +91 6205425668
              </p>
            </div>

            {/* Social */}
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <h3 style={{ color: "darkgoldenrod", marginBottom: "10px" }}>🔗 Follow Us</h3>
              <p style={{ margin: 0 }}>Facebook | Instagram | Twitter | LinkedIn</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
