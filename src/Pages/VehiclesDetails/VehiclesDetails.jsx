import React, { useEffect, useState } from "react";
import "./vehiclesDetails.css";
import { useParams } from "react-router-dom";
import IconBox from "../../Components/IconBox/IconBox";

function VehiclesDetails() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const index = parseInt(id) - 1;

  const fetchData = () => {
    fetch("/api/vehiclesData.json")
      .then((res) => res.json())
      .then((data) => setCar(data[index]))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="vehicle-details" className="page vehicle-details">
      <img src={car.pageBgImg} alt="Image" className="img-fluid page-img" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-0 details-left">
            <img
              src={car.bannerImg}
              alt="banner Image"
              className="img-fluid details-img-left"
            />
            <div className="price">
              <span> Drive Away</span>${" "}
              {car.price && car.price.toLocaleString("en-US")}
            </div>
            <a href="#" className="contact-seller">
              <i class="bi bi-telephone-fill"></i> Contact Delear
            </a>
          </div>

          <div className="col-lg-4 p-0 details-middle">
            <div className="content">
              <h2>Vehicle Details</h2>

              <div className="details-box">
                <i class="bi bi-emoji-smile"></i>
                <span>Lorem ipsum dolor sit.</span>
                <p>
                  <strong>Lorem ipsum </strong>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div className="details-box">
                <i class="bi bi-journal-richtext"></i>
                <span>Lorem ipsum dolor sit.</span>
                <p>
                  <strong>Lorem ipsum </strong>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div className="details-box">
                <i class="bi bi-clock-history"></i>
                <span>Lorem ipsum dolor sit.</span>
                <p>
                  <strong>Lorem ipsum </strong>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <img
              src={car.leftImg}
              alt="Image"
              className="img-fluid details-img-middle"
            />
          </div>

          <div className="col-lg-4 p-0 details-right">
            <img
              src={car.rightImg}
              alt="Right Image"
              className="img-fluid details-img-right "
            />
            <div className="d-flex gap-2">
              <IconBox
                icon="bx bx-tachometer"
                title={car.model}
                description="Description ipsum dolor sit amet consectetur adipisicing elit. Quas, eum?
                description"
              />
              <IconBox icon="bx bx-world" title={car.engineData} />
            </div>

            <div className="details-description">
              <h4>Description</h4>
              <p>{car.description ? car.description.slice(0, 180) : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiclesDetails;
