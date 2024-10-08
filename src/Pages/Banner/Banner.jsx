import React, { useContext } from "react";
import "./banner.css";
import { AppContext } from "../../App";
import SlideBtn from "../../Components/SlideBtn/SlideBtn";
import CircleBar from "../../Components/CircleBar/CircleBar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Banner() {
  const { data: cars, setData: setCars } = useContext(AppContext);
  const [video, setVideo] = useState(false);

  const toggleVideo = () => {
    setVideo(!video);
  };

  const handleSlideChange = (ind) => {
    if (ind >= 4) {
      ind = -1;
    }
    const newCars = cars.map((car, index) => {
      car.active = false;
      if (index === ind + 1) {
        car.active = true;
      }
      return car;
    });

    setCars(newCars);
  };

  return (
    <div className="banner">
      {cars &&
        cars.length > 0 &&
        cars.slice(0, 5).map((car, index) => {
          return (
            <div
              className={`slide ${car.active ? "active" : undefined}`}
              key={car._id}
            >
              <div className="container-fluid">
                <div className="row banner-top">
                  <div className="col-lg-4 p-0 banner-top-left">
                    <div className="banner-title">
                      <h1>Get Your Dream {car.make}</h1>
                      <span className="slide-number">0{car._id}</span>
                    </div>
                    <SlideBtn index={index} slideChange={handleSlideChange} />
                  </div>
                  <div className="col-lg-8 p-0 banner-top-right">
                    <div className="banner-img">
                      <img
                        src={car.bannerImg}
                        alt="banner Image"
                        className={`img-fluid ${video ? undefined : "active"}`}
                      />
                      <video
                        src={car.video}
                        className={`banner-video ${
                          video ? "active" : undefined
                        }`}
                        autoPlay
                        loop
                        muted
                      ></video>
                      <div className="car-brief">
                        <div className="car-intro">
                          <CircleBar
                            name="Power"
                            number={car.power}
                            color="#f82249"
                          />
                          <CircleBar
                            name="Engine"
                            number={car.engine}
                            color="#fe5d26"
                          />
                          <CircleBar
                            name="New"
                            number={car.new}
                            color="#00df22"
                          />
                        </div>
                        <div className="car-nav">
                          <li>
                            <Link to={`/vehicles/${car._id}`}>
                              Details
                              <i className="bi bi-arrow-right-short"></i>
                            </Link>
                          </li>
                          <li>
                            <Link onClick={toggleVideo}>
                              {video ? "Image" : "Video"}
                              <i className="bi bi-arrow-right-short"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/vehicles">
                              More Vehicles
                              <i className="bi bi-arrow-right-short"></i>
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row banner-bottom">
                  <div className="col-lg-4 p-0 banner-bottom-left">
                    <div className="banner-img">
                      <img
                        src={car.leftImg}
                        alt="Image-left-Banner"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 p-0 banner-bottom-middle ">
                    <div className="car-description">
                      <h2 className="car-title">{car.title}</h2>
                      <div className="car-features">
                        <p>{car.description.slice(0, 220)}</p>
                        <Link
                          to={`/vehicles/${car._id}`}
                          className="detail-link text-center"
                        >
                          Explore <i className="bi bi-arrow-right-short"></i>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 p-0 banner-bottom-right">
                    <img
                      src={car.rightImg}
                      alt="Image-left-Banner"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Banner;
