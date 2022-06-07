import React from "react";
import "../../App.css";
import Cards from "../Cards";
import LandingImage from "../LandingImage";
import Clients from "../Clients";
import Form from "../Form";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <LandingImage />
      <Cards />
      <Clients />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
