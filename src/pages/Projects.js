import React, { useEffect, useState } from "react";
import projectBanner from "../assets/images/projectbanner.png";
import projectSide from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project6 from "../assets/images/project6.jpg";
import project7 from "../assets/images/project7.jpg"; // ✅ Ye add karna hai
import project8 from "../assets/images/project8.jpg";
import project9 from "../assets/images/project9.jpg";
import project10 from "../assets/images/project10.webp";
const ProjectPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div>
      {/* 🔷 Project Banner Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "520px" : "500px",
          overflow: "hidden",
          backgroundColor: "#f0f8ff",
        }}
      >
        {/* Background Image */}
        <img
          src={projectBanner}
          alt="Project Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />

        {/* ✅ Banner Content (mobile par side image ke upar) */}
        <div
          style={{
            position: "absolute",
            left: "5%",
            right: isMobile ? "5%" : "auto",
            top: isMobile ? "auto" : "50%",
            bottom: isMobile ? "250px" : "auto", // 👈 KEY FIX
            transform: isMobile ? "none" : "translateY(-50%)",
            color: "white",
            maxWidth: isMobile ? "90%" : "600px",
            padding: "20px",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "28px" : "48px",
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            Explore Our Creative Projects
          </h1>

          <p
            style={{
              fontSize: isMobile ? "15px" : "20px",
              lineHeight: 1.5,
            }}
          >
            Discover how we transform spaces into inspiring environments with
            expert planning, stunning designs, and unmatched craftsmanship.
          </p>
        </div>

        {/* Side Image (mobile + desktop dono me visible) */}
        <div
          style={{
            position: "absolute",
            right: isMobile ? "50%" : "2%",
            bottom: isMobile ? "20px" : "auto",
            top: isMobile ? "auto" : "75%",
            transform: isMobile
              ? "translateX(50%)"
              : "translateY(-50%)",
            zIndex: 3,
          }}
        >
          <img
            src={projectSide}
            alt="Side Project"
            style={{
              height: isMobile ? "200px" : "340px",
              border: "4px solid white",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* 🔶 Projects Two Column Gallery */}
<section
  style={{
    display: "grid",
    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
    gap: "30px",
    padding: "60px 5%",
    backgroundColor: "#fefefe",
  }}
>
  {/* Project 1 */}
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "10px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      const img = e.currentTarget.querySelector("img");
      img.style.transform = "scale(1.05)";
      img.style.opacity = "0.3";
    }}
    onMouseLeave={(e) => {
      const img = e.currentTarget.querySelector("img");
      img.style.transform = "scale(1)";
      img.style.opacity = "1";
    }}
  >
    <img
      src={project3}
      alt="Project 1"
      style={{
        width: "100%",
        height: "400px",
        objectFit: "cover",
        transition: "transform 0.4s ease, opacity 0.4s ease",
        display: "block",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        color: "#fff",
        fontSize: "22px",
        fontWeight: "bold",
      }}
    >
      Modern Kitchen
    </div>
  </div>

  {/* Project 2 */}
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "10px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      const img = e.currentTarget.querySelector("img");
      img.style.transform = "scale(1.05)";
      img.style.opacity = "0.3";
    }}
    onMouseLeave={(e) => {
      const img = e.currentTarget.querySelector("img");
      img.style.transform = "scale(1)";
      img.style.opacity = "1";
    }}
  >
    <img
      src={project4}
      alt="Project 2"
      style={{
        width: "100%",
        height: "400px",
        objectFit: "cover",
        transition: "transform 0.4s ease, opacity 0.4s ease",
        display: "block",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        color: "#fff",
        fontSize: "22px",
        fontWeight: "bold",
      }}
    >
      Luxury Living Room
    </div>
  </div>
</section>


<section
  style={{
    padding: "60px 0",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1400px",
      margin: "auto",
    }}
  >
    <img
      src={project6} // Make sure to import it at top: import project6 from "../assets/images/project6.jpg";
      alt="Sample Image"
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "600px",
        objectFit: "cover",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    />

    <h2
      style={{
        marginTop: "30px",
        fontSize: "36px",
        color: "#222",
      }}
    >
      Boa Vista House
    </h2>
  </div>
</section>



{/* 🔸 Section with Hover Effect and Unequal Image Sizes */}
<section style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      maxWidth: "1400px",
      margin: "auto",
      flexDirection: windowWidth <= 768 ? "column" : "row",
    }}
  >
    {/* Left Image (Taller) */}
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
        flex: 1,
        minWidth: "300px",
        height: windowWidth <= 768 ? "auto" : "550px",
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img");
        img.style.transform = "scale(1.05)";
        const overlay = e.currentTarget.querySelector(".overlay");
        overlay.style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        img.style.transform = "scale(1)";
        const overlay = e.currentTarget.querySelector(".overlay");
        overlay.style.opacity = 0;
      }}
    >
      <img
        src={project4}
        alt="Left Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.3s ease",
        }}
      />
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(184,134,11,0.6)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bold",
          opacity: 0,
          transition: "opacity 0.3s ease",
          textAlign: "center",
        }}
      >
        Our Project A
      </div>
    </div>

    {/* Right Side: Two stacked images */}
    <div
      style={{
        flex: 2,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        minWidth: "400px",
      }}
    >
      {/* Top Right Image */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          cursor: "pointer",
          height: windowWidth <= 768 ? "auto" : "265px",
        }}
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector("img");
          img.style.transform = "scale(1.05)";
          const overlay = e.currentTarget.querySelector(".overlay");
          overlay.style.opacity = 1;
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector("img");
          img.style.transform = "scale(1)";
          const overlay = e.currentTarget.querySelector(".overlay");
          overlay.style.opacity = 0;
        }}
      >
        <img
          src={project3}
          alt="Top Right Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.3s ease",
          }}
        />
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(184,134,11,0.6)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "bold",
            opacity: 0,
            transition: "opacity 0.3s ease",
            textAlign: "center",
          }}
        >
          Our Project B
        </div>
      </div>

      {/* Bottom Right Image */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          cursor: "pointer",
          height: windowWidth <= 768 ? "auto" : "265px",
        }}
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector("img");
          img.style.transform = "scale(1.05)";
          const overlay = e.currentTarget.querySelector(".overlay");
          overlay.style.opacity = 1;
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector("img");
          img.style.transform = "scale(1)";
          const overlay = e.currentTarget.querySelector(".overlay");
          overlay.style.opacity = 0;
        }}
      >
        <img
          src={project7}
          alt="Bottom Right Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.3s ease",
          }}
        />
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(184,134,11,0.6)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "bold",
            opacity: 0,
            transition: "opacity 0.3s ease",
            textAlign: "center",
          }}
        >
          Our Project C
        </div>
      </div>
    </div>
  </div>
</section>


{/* 🔽 Alternating Image-Content Section */}
<section
  style={{
    padding: "60px 20px",
    backgroundColor: "#f8f8f8",
  }}
>
  {/* First Row: Image - Content - Image */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px",
      maxWidth: "1400px",
      margin: "0 auto 40px auto",
    }}
  >
    <div style={{ flex: 1, minWidth: "280px" }}>
      <img
        src={project8}
        alt="Image 1"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
    </div>

    <div
      style={{
        flex: 1,
        minWidth: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "lightpink",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontSize: "18px",
        color: "#333",
        textAlign: "center",
        fontWeight: 500,
      }}
    >
      Our projects reflect a perfect blend of trust and top-notch quality.
    </div>

    <div style={{ flex: 1, minWidth: "280px" }}>
      <img
        src={project9}
        alt="Image 2"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  </div>

  {/* Second Row: Content - Image - Content */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px",
      maxWidth: "1400px",
      margin: "0 auto 40px auto",
    }}
  >
    <div
      style={{
        flex: 1,
        minWidth: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "lightpink",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontSize: "18px",
        color: "#333",
        textAlign: "center",
        fontWeight: 500,
      }}
    >
      Every design we create balances perfection and creativity.
    </div>

    <div style={{ flex: 1, minWidth: "280px" }}>
      <img
        src={project10}
        alt="Image 3"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
    </div>

    <div
      style={{
        flex: 1,
        minWidth: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "lightpink",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontSize: "18px",
        color: "#333",
        textAlign: "center",
        fontWeight: 500,
      }}
    >
      Your dream, our responsibility — delivered with excellence.
    </div>
  </div>
</section>

      
    </div>
  );
};

export default ProjectPage;
