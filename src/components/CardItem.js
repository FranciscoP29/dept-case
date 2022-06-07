import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <div>
          <figure className="cards-item-pic-wrap">
            <img
              className="cards-item-pic"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-company">{props.company}</h5>
            <h5 className="cards-item-desc">{props.desc}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
