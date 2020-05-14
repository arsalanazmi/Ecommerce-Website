import React from "react";
import { Card } from "react-bootstrap";
import image7 from "../images/Clothes/image7.jpg";
import image8 from "../images/Clothes/image8.jpeg";
import image9 from "../images/Clothes/image9.jpg";
import image10 from "../images/Clothes/image10.jpg";
import image11 from "../images/Clothes/image11.jpeg";
import image12 from "../images/Clothes/image12.jpg";

export function ProductMen() {
  const cards = [
    {
      title: "Business Men Shirt",
      description: "In Stock Rs 1699 PKR",
      img: image7
    },
    {
      title: "Levis Casual Black",
      description: "In Stock Rs 1499 PKR",
      img: image8
    },
    {
      title: "Plain White Shirt",
      description: "In Stock Rs 1299 PKR",
      img: image9
    },
    {
      title: "Formal Cotton Shirt",
      description: "In Stock Rs 3300 PKR",
      img: image10
    },
    {
      title: "Mens Formal Shirt",
      description: "In Stock Rs 899 PKR",
      img: image11
    },
    {
      title: "Business Shirt",
      description: "In Stock Rs 1349 PKR",
      img: image12
    }
  ];
  return (
    <div className="mb-5">
      <h2 className="my-4 text-center">
        <u>Men Collection</u>
      </h2>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Men characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Men(props) {
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