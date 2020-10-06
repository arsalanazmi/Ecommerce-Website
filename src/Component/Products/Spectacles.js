import React from "react";
import { Card } from "react-bootstrap";
import image1 from "../images/Spectacles/image1.jpg";
import image2 from "../images/Spectacles/image2.jpg";
import image3 from "../images/Spectacles/image3.jpg";
import image4 from "../images/Spectacles/image4.jpg";
import image5 from "../images/Spectacles/image5.jpg";
import image6 from "../images/Spectacles/image6.jpg";

export function ProductSpectacles() {
  const cards = [
    {
      title: "Chopard Round",
      description: "In Stock Rs 1,200 PKR",
      img: image1
    },
    {
      title: "Aviator Chrome",
      description: "In Stock Rs 1,499 PKR",
      img: image2
    },
    {
      title: "Gissele Round",
      description: "In Stock Rs 1,199 PKR",
      img: image3
    },
    {
      title: "Jose Polarized",
      description: "In Stock Rs 999 PKR",
      img: image4
    },
    {
      title: "RayBan",
      description: "In Stock Rs 1350 PKR",
      img: image5
    },
    {
      title: "Jimmy Choo",
      description: "In Stock Rs 799 PKR",
      img: image6
    }
  ];
  return (
    <div className="mb-5">
      <h1 className="my-4 text-center">
        <u>Spectacles</u>
      </h1>
      <div className="body text-center">
        {cards.map((val, id) => (
          <Spectacles characteristics={val} key={id} />
        ))}
      </div>
    </div>
  );
}

export function Spectacles(props) {
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