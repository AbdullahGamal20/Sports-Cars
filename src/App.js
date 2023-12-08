import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import Banner from "./Pages/Banner/Banner";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Vehicles from "./Pages/Vehicles/Vehicles";
import VehiclesDetails from "./Pages/VehiclesDetails/VehiclesDetails";
import Library from "./Pages/Library/Library";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [library, setLibrary] = useState([]);
  const fetchData = () => {
    fetch("/api/vehiclesData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);

  return (
    <>
      <AppContext.Provider value={{ data, setData, library, setLibrary }}>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehiclesDetails />} />
          <Route path="/library" element={<Library />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
