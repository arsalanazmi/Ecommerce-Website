import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../images/Laptop/image1.jpg";
import image2 from "../images/Laptop/image2.jpg";
import image3 from "../images/Laptop/image3.jpg";
import image4 from "../images/Laptop/image4.jpg";
import image5 from "../images/Laptop/image5.jpg";
import image6 from "../images/Laptop/image6.jpg";

export function ProductLaptop() {
  const cards = [
    {
      title: "Gaming Laptop",
      description: "In Stock Rs 79,999 PKR",
      img: image1
    },
    {
      title: "hp Core i7 14 inch",
      description: "In Stock Rs 34,999 PKR",
      img: image2
    },
    {
      title: "Dell Core i7",
      description: "In Stock Rs 45,999 PKR",
      img: image3
    },
    {
      title: "hp Core-i3 14 inch",
      description: "In Stock Rs 18,999 PKR",
      img: image4
    },
    {
      title: "Apple MacBook Pro",
      description: "In Stock Rs 1,50,000 PKR",
      img: image5
    },
    {
      title: "Lenevo core i6",
      description: "In Stock Rs 23,999 PKR",
      img: image6
    }
  ];
  return (
    <div className="mb-5">
      <h1 className="my-4 text-center">
        <u>Laptop</u>
      </h1>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Laptop characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Laptop(props) {
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