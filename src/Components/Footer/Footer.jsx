import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row upper">
          <div className="col-lg-4">
            <a href="/" className="logo">
              Motors
            </a>
          </div>
          <div className="col-lg-2 icons">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-whatsapp"></i>
          </div>
        </div>
        <hr />
        <div className="row middle">
          <div className="col-lg-3">
            <h4>Address</h4>
            <div className="footer-info">
              <p>October ,Mall of Arabia</p>
              <p>Gate 5</p>
              <p className="phone">
                {" "}
                <strong>phone: </strong> +20 1234 678 789
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Company</h4>
            <div className="footer-info">
              <p>About Us</p>
              <p>Vehicles</p>
              <p>Services</p>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Pricing</h4>
            <div className="footer-info">
              <p>Overview</p>
              <p>Promotions</p>
              <p>Evaluation</p>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Socials</h4>
            <div className="footer-info">
              <p>Overview</p>
              <p>Promotions</p>
              <p>Evaluation</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row lower">
          <span>
            {" "}
            <i class="bi bi-c-circle"></i> 2023 Copyrights for Motors Company
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
