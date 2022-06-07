import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>in all industries</h1>
      <div className="cards-container">
        <ul className="cards-items">
          <CardItem
            src="images/holiday.png"
            desc="A summer island in the Netherlands"
            company="Bol.com"
          />
          <CardItem
            src="images/banking.png"
            desc="Not some average banking website"
            company="Kempen"
          />
          <CardItem
            src="images/banking.png"
            desc="Beautiful design meets innovative technology"
            company="Philips"
          />
          <CardItem
            src="images/banking.png"
            desc="A 100 years of Mandariaan and De Stjil"
            company="Gemeentemusuem"
          />
          <CardItem
            src="images/holiday.png"
            desc="A summer island in the Netherlands"
            company="Bol.com"
          />
          <CardItem
            src="images/banking.png"
            desc="Not some average banking website"
            company="Kempen"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
