import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BaseLayout({ children }) {
  return (
    <>
      {/* Helmet se head me link add kar rahe hain */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Helmet>

      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default BaseLayout;
