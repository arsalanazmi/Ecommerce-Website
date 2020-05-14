import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../images/Shoes/image1.jpg";
import image2 from "../images/Shoes/image2.jpg";
import image3 from "../images/Shoes/image3.jpg";
import image4 from "../images/Shoes/image4.jpg";
import image5 from "../images/Shoes/image5.jpeg";
import image6 from "../images/Shoes/image6.jpg";

export function ProductShoes() {
  const cards = [
    {
      title: "Mesh Shoes",
      description: "In Stock Rs 2,399 PKR",
      img: image1
    },
    {
      title: "Moto Shoes",
      description: "In Stock Rs 3,699 PKR",
      img: image2
    },
    {
      title: "Skethers",
      description: "In Stock Rs 2,199 PKR",
      img: image3
    },
    {
      title: "Sneakers",
      description: "In Stock Rs 3300 PKR",
      img: image4
    },
    {
      title: "Ladies Sneakers",
      description: "In Stock Rs 899 PKR",
      img: image5
    },
    {
      title: "Ladies Shoe",
      description: "In Stock Rs 1349 PKR",
      img: image6
    }
  ];
  return (
    <div className="mb-5">
      <h2 className="my-4 text-center">
        <u>Shoes</u>
      </h2>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Shoes characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Shoes(props) {
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