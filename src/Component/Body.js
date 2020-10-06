import React from "react";

import SmartPhone from "./images/Mobile/Samsung-Galaxy-S8.jpg";
import Laptop from "./images/Laptop/Apple_Macbook.jpg";
import Tablet from "./images/Tablet/Tablet.png";
import Clothes from "./images/Clothes/Sana Safinaz.jpg";
import Shoes from "./images/Shoes/Stylo-Shoes.jpg";
import Sunglasses from "./images/Spectacles/Glasses.jpg";
import { CardComponent } from "./Home.js";

export function Body() {
  const cardType = [
    {
      title: "Samsung Galaxy S8",
      img: SmartPhone
    },
    {
      title: "Apple Macbook",
      img: Laptop
    },
    {
      title: "iPad Mini 5",
      img: Tablet
    },
    {
      title: "Sana Safinaz Lawn",
      img: Clothes
    },
    {
      title: "Stylo Shoes",
      img: Shoes
    },
    {
      title: "Sunglasses",
      img: Sunglasses
    }
  ];
  return (
    <div className="mb-5">
      <h1 className="my-4 text-center">
        <u>Top Category:</u>
      </h1>
      <div className="body text-center">
        {cardType.map((val, id) => {
          return <CardComponent characteristics={val} key={id} />;
        })}
      </div>
    </div>
  );
}