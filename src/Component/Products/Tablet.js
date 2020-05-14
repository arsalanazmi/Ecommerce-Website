import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../images/Tablet/image1.jpg";
import image2 from "../images/Tablet/image2.jpg";
import image3 from "../images/Tablet/image3.jpg";
import image4 from "../images/Tablet/image4.jpg";
import image5 from "../images/Tablet/image5.jpg";
import image6 from "../images/Tablet/image6.jpg";

export function ProductTablet() {
  const cards = [
    {
      title: "Amazon Fire 7",
      description: "In Stock Rs. 28,999 PKR",
      img: image1
    },
    {
      title: "Apple iPad Pro",
      description: "In Stock Rs. 56,999 PKR",
      img: image2
    },
    {
      title: "Samsung Tab S6",
      description: "In Stock Rs. 36,900 PKR",
      img: image3
    },
    {
      title: "Samsung Tab A8",
      description: "In Stock Rs. 29,900 PKR",
      img: image4
    },
    {
      title: "Lenevo Tab M8",
      description: "In Stock Rs 27,600 PKR",
      img: image5
    },
    {
      title: "Apple iPad 6",
      description: "In Stock Rs 47,999 PKR",
      img: image6
    }
  ];
  return (
    <div className="mb-5">
      <h2 className="my-4 text-center">
        <u>Tablet</u>
      </h2>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Tablet characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Tablet(props) {
  return (
    <div className="box" style={{ padding: "10px" }}>
      <Card style={{ width: "13rem" }}>
        <Card.Img
          variant="top"
          src={props.characteristics.img}
          style={{ height: "160px" }}
        />
        <Card.Body>
          <Card.Title className="title">{props.characteristics.title}</Card.Title>
          <Card.Text className="description">{props.characteristics.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}