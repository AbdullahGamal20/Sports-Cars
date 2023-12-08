import React, { useContext } from "react";
import "./library.css";
import bgImg from "../../images/mclaren-4.jpeg";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";
function Library() {
  const { library: cars } = useContext(AppContext);

  return (
    <div id="library" className="page library">
      <img src={bgImg} alt="Image" className="img-fluid page-img" />
      <div className="container">
        <PageTitle
          title="Vehicles library"
          subTitle="Here Are Your Vehicle Collections"
        />
        <div className="row">
          {cars && cars.length === 0 ? (
            <div className="text-center">
              <h3 className="empty">You Have No Collections</h3>
              <Link to="/vehicles" className="browse">
                Browse Vehicles
              </Link>
            </div>
          ) : (
            cars.map((car) => {
              return <VehicleCard key={car._id} car={car} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Library;
