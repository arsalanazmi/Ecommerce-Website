import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../images/Mobile/image1.png";
import image2 from "../images/Mobile/image2.jpg";
import image3 from "../images/Mobile/image3.jpg";
import image4 from "../images/Mobile/image4.jpg";
import image5 from "../images/Mobile/image5.jpg";
import image6 from "../images/Mobile/image6.png";

export function ProductMobile() {
  const cards = [
    {
      title: "Nokia 7.2",
      description: "In Stock Rs. 45,999 PKR",
      img: image1
    },
    {
      title: "Oppo Reno 2",
      description: "In Stock Rs. 24,999 PKR",
      img: image2
    },
    {
      title: "Samsung Note 8",
      description: "In Stock Rs. 28,999 PKR",
      img: image3
    },
    {
      title: "Huawei Y9 Prime",
      description: "In Stock Rs. 35,999 PKR",
      img: image4
    },
    {
      title: "Infinix Hot 8",
      description: "In Stock Rs. 18,999 PKR",
      img: image5
    },
    {
      title: "Sony Xperia 5",
      description: "In Stock Rs. 22,999 PKR",
      img: image6
    }
  ];
  return (
    <div className="mb-5">
      <h2 className="my-4 text-center">
        <u>Mobile</u>
      </h2>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Mobile characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Mobile(props) {
  return (
    <div className="box" style={{ padding: "10px" }}>
      <Card style={{ width: "14rem" }}>
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