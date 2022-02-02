import React, { useState } from "react";

export default function Header(props) {
  const [show, setShow] = useState(false);
  const hamIcon = {
      cursor: "pointer",
    },
    hamMenu = {
      width: "250px",
      height: "92%",
      backgroundColor: "#535557",
      right: "0",
      zIndex: "1",
    };
  return (
    <>
      <header className="d-flex justify-content-between px-lg-5 px-4 py-3">
        <h3 className="fw-bold mb-0">{props.heading}</h3>
        <i
          className="h3 mb-0 fas fa-bars"
          style={hamIcon}
          onClick={() => setShow((s) => !s)}
        ></i>
      </header>
      {/* hamburger */}
      <div
        className="position-fixed px-4 pt-3 pb-5 flex-column justify-content-between"
        id="hamburger"
        style={{ ...hamMenu, display: show ? "flex" : "none" }}
      >
        <div id="lists">
          <a
            href="/"
            className="d-block text-decoration-none h4 text-white border-bottom pb-3 my-4"
          >
            DEMAND TAP
          </a>
          <a
            href="#features"
            className="d-block text-decoration-none h4 text-white border-bottom pb-3 mb-4"
          >
            FEATURES
          </a>
          <a
            href="#"
            className="d-block text-decoration-none h4 text-white border-bottom pb-3 mb-4"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="d-block text-decoration-none h4 text-white pb-3 mb-4"
          >
            CONTACT US
          </a>
        </div>
        <a
          href="#"
          className="text-white text-decoration-none d-flex align-items-center"
        >
          <i className="fas fa-circle fs-1 text-dark"></i>
          <span className="fw-bold ms-3 me-5 fs-5">Login</span>
          <i className="fas fa-chevron-right ms-5"></i>
        </a>
      </div>
    </>
  );
}
