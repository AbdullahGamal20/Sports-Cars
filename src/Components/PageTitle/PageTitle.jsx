import React from "react";
import "./pageTitle.css";

function PageTitle({ title, subTitle }) {
  return (
    <div className="page-title mt-5">
      <h2> {title} </h2>
      <p> {subTitle} </p>
    </div>
  );
}

export default PageTitle;
