import React from "react";

const BrandPartners = () => {
  const logos = [
    "anchor.png",
    "asianpaints.png",
    "berger.png",
    "ebco.png",
    "elica.png",
    "hettick.png",
    "eglu.png",
    "excel.png",
    "faber.png",
    "finolex.png"
  ];

  const allLogos = [...logos, ...logos];

  return (
    <section
      style={{
        background: "#f9f9f9",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "36px", color: "#222", fontWeight: "bold", marginBottom: "10px" }}>
        Our Brand Partners
      </h2>
      <p style={{ textAlign: "center", color: "#666", fontSize: "16px", marginBottom: "40px" }}>
        An elite list of partners who strengthen our brand promise
      </p>

      <div className="scroll-wrapper" style={{ overflow: "hidden", position: "relative" }}>
        <div className="scroll-track" style={{ display: "flex", gap: "40px", animation: "scroll-left 25s linear infinite" }}>
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="brand-logo"
              style={{
                minWidth: "160px",
                height: "100px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                flexShrink: 0,
                transition: "transform 0.3s ease, boxShadow 0.3s ease"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/${logo}`}
                alt={logo.split(".")[0]}
                style={{ maxWidth: "100%", maxHeight: "70px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .brand-logo:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 768px) {
            .brand-logo {
              min-width: 120px;
              height: 80px;
            }

            .scroll-track {
              gap: 30px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default BrandPartners;
