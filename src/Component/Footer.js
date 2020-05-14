import React from "react";

export function Footer() {
  return (
    // <!-- Footer -->

    <footer
      className="page-footer font-small unique-color-dark"
      style={{ background: "rgb(83, 83, 83)", color: "white" }}
    >
      <div style={{ background: "rgb(127, 130, 133)", color: "white" }}>
        <div className="container">
          {/* <!-- Grid row--> */}
          <div className="row py-4 d-flex align-items-center">
            {/* <!-- Grid column --> */}
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                Get connected with us on social networks!
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              {/* <!-- Facebook --> */}
              <a href="https://www.facebook.com/" className="fb-ic ">
                <i className="fa fa-facebook-f icon mr-4"> </i>
              </a>
              {/* <!-- Twitter --> */}
              <a href="https://www.twitter.com/" className="tw-ic">
                <i className="fa fa-twitter icon mr-4"> </i>
              </a>
              {/* <!-- Google +--> */}
              <a href="https://accounts.google.com/" className="gplus-ic">
                <i className="fa fa-google-plus icon mr-4"> </i>
              </a>
              {/* <!--Linkedin --> */}
              <a href="https://www.linkedin.com/" className="li-ic">
                <i className="fa fa-linkedin icon mr-4"> </i>
              </a>
              {/* <!--Instagram--> */}
              <a href="https://www.instagram.com/" className="ins-ic">
                <i className="fa fa-instagram icon"></i>
              </a>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row--> */}
        </div>
      </div>

      {/* <!-- Footer Links --> */}
      <div className="container text-center text-md-left mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* <!-- Content --> */}
            <h6 className="text-uppercase font-weight-bold">Online Shop</h6>
            <hr
              className="bg-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              We are a online shopping store located in Brooklyn, New York.
              We’ve variety of stocks available in our store and we’ve won a ton
              of best product awards as well.
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase font-weight-bold">Products</h6>
            <hr
              className="bg-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="/Products/Clothes" className="link">
                Clothes
              </a>
            </p>
            <p>
              <a href="/Products/Shoes" className="link">
                Shoes
              </a>
            </p>
            <p>
              <a href="/Products/Spectacles" className="link">
                Spectacles
              </a>
            </p>
            <p>
              <a href="/Products/Mobile" className="link">
                Mobile
              </a>
            </p>
            <p>
              <a href="/Products/Electronics" className="link">
                Electronics
              </a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase font-weight-bold">Our Services</h6>
            <hr
              className="bg-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!" className="link">
                Help
              </a>
            </p>
            <p>
              <a href="#!" className="link">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#!" className="link">
                Return Policy
              </a>
            </p>
            <p>
              <a href="#!" className="link">
                Our Franchices
              </a>
            </p>
            <p>
              <a href="#!" className="link">
                Terms and Condition
              </a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="bg-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> info@OnlineShop.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Footer Links --> */}

      {/* <!/-- Copyright --> */}
      <div
        style={{ background: "rgb(127, 130, 133)", color: "white" }}
        className="footer-copyright text-center py-3"
      >
        © 2020 Copyright:{" "}
        <a href="#!" className="text-white">
          OnlineShop.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // {/* <!-- Footer --> */}
  );
}