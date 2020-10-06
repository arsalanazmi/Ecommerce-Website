import React from "react";
import banner1 from "./images/Sale.png"
import banner2 from "./images/Clothes/Clothes.jpg";
import banner3 from "./images/Mobile/Samsung.jpg";
import banner4 from "./images/Laptop/Laptop.jpg";
import banner5 from "./images/Shoes/Shoes.jpg";
import banner6 from "./images/Spectacles/Spectacles.jpg";
import banner7 from "./images/Tablet/Tablet.jpg";
import { Carousel } from "react-bootstrap";

import { Card } from "react-bootstrap";

export function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner1}
            alt="First Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Men/Women Clothes</h3>
            <p>
              Latest Summer Collection of 2020 will be avaibale in stores from
              15th of Feb.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner3}
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h3>The Best Samsung Phone</h3>
            <p>The Top Samsung Smartphones of 2020.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner4}
            alt="Fourth Slide"
          />
          <Carousel.Caption>
            <h3>Laptop</h3>
            <p>Apple MacBook Pro</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner5}
            alt="Fifth Slide"
          />
          <Carousel.Caption>
            <h3>Casual Shoes</h3>
            <p>Comfortable Wear-resistant Sneakers.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner6}
            alt="Sixth Slide"
          />
          <Carousel.Caption>
            <h3>Sunglasses</h3>
            <p>Aviator Classic.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={banner7}
            alt="Seven Slide"
          />
          <Carousel.Caption>
            <h3>Samsung Galaxy Tab S5e</h3>
            <p>Great for Streaming and Gaming</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export function CardComponent(props) {
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
        </Card.Body>
      </Card>
    </div>
  );
}