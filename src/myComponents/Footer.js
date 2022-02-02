import React from "react";

export default function Footer(props) {
  return (
    <div className="row d-flex justify-content-between p-lg-5 px-4 py-5">
      <div className="col-lg-5">
        <h2 className="fw-bold mb-4">{props.heading}</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>
      <div className="col-lg-4 text-lg-end mt-lg-0 mt-4">
        <h4 className="fw-bold mb-4 ">FOLLOW US ON</h4>
        <i className="fas fa-circle fs-2"></i>
        <i className="fas fa-circle fs-2 ms-3"></i>
        <i className="fas fa-circle fs-2 ms-3"></i>
        <i className="fas fa-circle fs-2 ms-3"></i>
        <p className="mt-lg-3 mt-2 mb-0">
          In publishing and graphic design, lorem ipsum
        </p>
      </div>
    </div>
  );
}
