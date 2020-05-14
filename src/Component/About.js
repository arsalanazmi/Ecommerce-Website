import React from "react";
import AboutUs from "./images/About/About Us.png";
import Founder from "./images/About/Founders.png";
import NewArrival from "./images/About/New Arrival.png";
import Shoes from "./images/About/Shoes.png";
import Store from "./images/About/Store.png";

export function About() {
  return (
    <div className="about">
      <img
        src={AboutUs}
        className="my-5"
        alt="owner"
        style={{ width: "100%" }}
      />
      <div className="about-heading my-4">
        <h2>OUR STORY</h2>
      </div>

      <div className="body text-center mt-4">
        <div className="mx-5">
          <i className="fa fa-star" style={{ fontSize: "60px" }}></i>
          <p style={{ fontSize: "10px" }}>U.S based Online Store</p>
        </div>
        <div className="mx-5">
          <i className="fa fa-shopping-cart" style={{ fontSize: "60px" }}></i>
          <p style={{ fontSize: "10px" }}>Over 65 new arrivals weekly</p>
        </div>
        <div className="mx-5">
          <i className="fa fa-map-marker" style={{ fontSize: "60px" }}></i>
          <p style={{ fontSize: "10px" }}>Locations across the South East</p>
        </div>
      </div>

      <div className="container text-center">
        <img
          src={Founder}
          alt="Founders"
          className="my-2"
          style={{
            width: "100%"
          }}
        />
        <p className="text-center my-2">
          Online Shop all started with a simple visit to the mall. Derrick +
          Danielle Case were walking through our average local mall with
          Danielle's sisters, and were exhausted after browsing through endless
          stores that all had the same premise - overpriced clothing that lacked
          style and the items were the same month after month. Danielle walked
          out of the final store and told Derrick, "This is ridiculous, we
          should open our own store. We should offer new styles every week, make
          it affordable and on trend."That idea led to the concept of the first
          "Online Shop" storefront in New York, Us in August 2009, just five
          weeks after that trip to the mall.
        </p>

        <div className="row my-4">
          <div className="col-md-4">
            <img
              className="img-responsive my-1"
              src={NewArrival}
              alt="New Arrival"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-responsive my-1"
              src={Shoes}
              alt="Shoes store"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-responsive my-1"
              src={Store}
              alt="Store"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}