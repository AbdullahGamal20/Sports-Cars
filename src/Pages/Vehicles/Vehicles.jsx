import React, { useContext } from "react";
import Img from "../../images/mclaren-1.jpg";
import { AppContext } from "../../App";
import "./vehicles.css";
import PageTitle from "../../Components/PageTitle/PageTitle";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";

function Vehicles() {
  const { data: cars, setData: setCars } = useContext(AppContext);

  return (
    <div id="vehicles" className="page vehicles">
      <img src={Img} alt="Image" className="img-fluid page-img" />
      <div className="container">
        <PageTitle
          title="Vehicles CATALOGUE"
          subTitle="Here Are Our New Arrivals"
        />
        <div className="row">
          {cars &&
            cars.length > 0 &&
            cars.map((car) => {
              return <VehicleCard car={car} key={car._id} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
