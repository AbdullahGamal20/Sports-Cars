import React from "react";
import "./services.css";
import Img from "../../images/mclaren-5.jpeg";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Img1 from "../../images/mclaren-1.jpg";
import Img2 from "../../images/mclaren-2.jpg";
import Img3 from "../../images/mclaren-3.jpeg";
import Img4 from "../../images/mclaren-4.jpeg";
import Img5 from "../../images/mclaren-5.jpeg";

function Services() {
  return (
    <div>
      <div className="page services">
        <img src={Img} alt="Image" className="img-fluid page-img" />
        <div className="container">
          <PageTitle title="Our Services" subTitle="What We Do " />
          <div className="row d-flex align-items-center justify-content-between gap-3">
            <div className="col-lg-6 info">
              <h3>We Are Ready To Do :</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                beatae, aliquam harum esse pariatur corrupti odio nobis
                quibusdam maxime dolorum at delectus tempora, sit cumque
                quisquam laborum quos id, aperiam modi quaerat aut est.
                Voluptates accusamus perferendis autem, pariatur aut ullam
                natus, quam, consequuntur praesentium quo necessitatibus? Iure
                rerum, laboriosam mollitia excepturi rem provident perspiciatis
                voluptatum amet magni in dolorum officia dignissimos ad, soluta
                laudantium vero iusto veritatis, nam autem vitae dolores
                inventore itaque eos. Ad cumque nulla vel, quod, animi,
                voluptatem eius deserunt quaerat in quis voluptate impedit totam
                eum dignissimos amet non repudiandae aspernatur unde ex ducimus.
                Sed.
              </p>
              <div className="button">
                <Link to="/vehicles" className="more">
                  Explore Vehicles
                </Link>
              </div>
            </div>
            <div className="col-lg-5 images">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Img1} alt="Image" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={Img2} alt="Image" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={Img3} alt="Image" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={Img4} alt="Image" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={Img5} alt="Image" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
