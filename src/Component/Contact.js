import React from "react";
import { Form, Button } from "react-bootstrap";

export function Contact() {
  return (
    <div className="my-4">
      <div style={{ width: "75%", margin: "0 auto" }}>
        <h3 className="text-capitalize text-center mb-4 contact">
          Hello Dear Customer! How can we help you?
        </h3>
        <p style={{ textAlign: "center" }}>
          Our mission at <b>Online Shop</b> is to make sure each customer leaves
          feeling more confident than when he/she walked in. We are committed to
          quality customer service, so please let us know if we can help. Our
          customer service team responds to phone calls and emails every Monday
          through Friday 9am - 5pm.
        </p>
        <div className="row text-center mt-5 mb-3">
          <div className="col">
            <i className="fa fa-clock-o" style={{ fontSize: "40px" }}></i>
            <p>
              <b>OFFICE HOURS</b>
              <br />
              Monday-Friday <br />
              9am - 5pm
            </p>
          </div>
          <div className="col">
            <i className="fa fa-whatsapp" style={{ fontSize: "40px" }}></i>
            <p>
              <b>CALL US</b>
              <br />
              678-989-2006
            </p>
          </div>
          <div className="col">
            <i className="fa fa-envelope" style={{ fontSize: "40px" }}></i>
            <p>
              <b>EMAIL US</b>
              <br />
              sales@onlineshop.com
            </p>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%" }} />

      <div className="mb-5">
        <h2 className="text-center my-4">
          <u>Contact Us</u>
        </h2>
        <Form style={{ width: "50%", margin: "0 auto" }}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicText">
            <Form.Label>How can we help ?</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Message" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ display: "block", margin: "0 auto" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}