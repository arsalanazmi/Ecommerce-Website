import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../images/Clothes/image1.jpg";
import image2 from "../images/Clothes/image2.jpg";
import image3 from "../images/Clothes/image3.jpg";
import image4 from "../images/Clothes/image4.jpg";
import image5 from "../images/Clothes/image5.jpg";
import image6 from "../images/Clothes/image6.jpg";

export function ProductWomen() {
  const cards = [
    {
      title: "Firdous Lawn",
      description: "In Stock Rs 1499 PKR",
      img: image1
    },
    {
      title: "Bonanza Lawn",
      description: "In Stock Rs 2299 PKR",
      img: image2
    },
    {
      title: "Gul Ahmed Lawn",
      description: "In Stock Rs 1999 PKR",
      img: image3
    },
    {
      title: "Al-Karam Lawn ",
      description: "In Stock Rs 3300 PKR",
      img: image4
    },
    {
      title: "Maria B. Lawn",
      description: "In Stock Rs 3500 PKR",
      img: image5
    },
    {
      title: "Khaadi Lawn",
      description: "In Stock Rs 3349 PKR",
      img: image6
    }
  ];
  return (
    <div className="my-5">
      <h1 className="my-4 text-center">
        <u>Women Collection</u>
      </h1>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Women characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Women(props) {
  return (
    <div className="box" style={{ padding: "10px" }}>
      <Card style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          src={props.characteristics.img}
          style={{ height: "180px" }}
        />
        <Card.Body>
          <Card.Title className="title">{props.characteristics.title}</Card.Title>
          <Card.Text className="description">{props.characteristics.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}