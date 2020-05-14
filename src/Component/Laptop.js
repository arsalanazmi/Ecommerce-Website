import React from "react";
import { Card } from "react-bootstrap";
import image1 from "./images/Laptop/image1.jpg";
import image2 from "./images/Laptop/image2.jpg";
import image3 from "./images/Laptop/image3.jpg";
import image4 from "./images/Laptop/image4.jpg";
import image5 from "./images/Laptop/image5.jpg";
import image6 from "./images/Laptop/image6.jpg";

export function ProductLaptop() {
  const cards = [
    {
      title: "",
      description: "In Stock Rs 1699 PKR",
      img: image1
    },
    {
      title: "",
      description: "In Stock Rs 1499 PKR",
      img: image2
    },
    {
      title: "",
      description: "In Stock Rs 1299 PKR",
      img: image3
    },
    {
      title: "",
      description: "In Stock Rs 3300 PKR",
      img: image4
    },
    {
      title: "",
      description: "In Stock Rs 899 PKR",
      img: image5
    },
    {
      title: "",
      description: "In Stock Rs 1349 PKR",
      img: image6
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
      <Card style={{ width: "17rem" }}>
        <Card.Img
          variant="top"
          src={props.characteristics.img}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{props.characteristics.title}</Card.Title>
          <Card.Text>{props.characteristics.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}