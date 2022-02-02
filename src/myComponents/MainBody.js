import React from "react";
import "./css/Style.css";
import imgRituraj from "./images/rituraj.png";
import imgMithun from "./images/mithun.png";
import imgDebashish from "./images/debashish.png";
import Clients from "./Clients";
import Features from "./Features";

export default function MainBody() {
  return (
    <>
      {/* hero */}
      <div
        className="d-flex align-items-center justify-content-center"
        id="hero"
      >
        <div className="fs-1 text-white">BANNER IMG + TAGLINE</div>
      </div>
      {/* services */}
      <div className="bg-dark text-white px-5 py-4" id="services">
        <h2 className="mb-5 text-lg-start text-center">
          One Tap Multiple Service
        </h2>
        <div className="row" id="cards">
          <div className="col-lg-3 text-center">
            <div className="serviceImages d-inline-block rounded-circle"></div>
            <h3 className="serviceName my-4">EMAIL</h3>
            <p className="serviceDesc mx-2 lh-sm">
              Lorem ipsum, dolor sit amet consectetur corola adipisicing elit
              repellendus.
            </p>
          </div>
          <div className="col-lg-3 mt-lg-0 mt-4 text-center">
            <div className="serviceImages d-inline-block rounded-circle"></div>
            <h3 className="serviceName my-4">DIALER</h3>
            <p className="serviceDesc mx-2 lh-sm">
              Lorem ipsum, dolor sit amet consectetur corola adipisicing elit
              repellendus.
            </p>
          </div>
          <div className="col-lg-3 mt-lg-0 mt-4 text-center">
            <div className="serviceImages d-inline-block rounded-circle"></div>
            <h3 className="serviceName my-4">SMS</h3>
            <p className="serviceDesc mx-2 lh-sm">
              Lorem ipsum, dolor sit amet consectetur corola adipisicing elit
              repellendus.
            </p>
          </div>
          <div className="col-lg-3 mt-lg-0 mt-4 text-center">
            <div className="serviceImages d-inline-block rounded-circle"></div>
            <h3 className="serviceName my-4">Social Media</h3>
            <p className="serviceDesc mx-2 lh-sm">
              Lorem ipsum, dolor sit amet consectetur corola adipisicing elit
              repellendus.
            </p>
          </div>
        </div>

        <h2 className="text-center mt-5 pt-2">APP FEATURES</h2>
      </div>
      {/* features */}
      <div className="my-5 pb-4" id="allFeatures">
        <Features />
      </div>
      {/* testimonials */}
      <div className="bg-dark p-5" id="testimonials">
        <h2 className="text-white text-center mb-5 pb-5">TESTIMONIALS</h2>
        <div className="row d-flex justify-content-center flex-lg-row flex-column">
          <div className="card col-3 me-lg-4 p-4 mb-lg-0 mb-5">
            <img className="rounded-circle mx-auto" src={imgRituraj} alt="" />
            <i className="fas fa-quote-left fs-2"></i>

            <p className="ms-5">
              Freshdigital's Conversational Al is great for being able to engage
              in a conversation quickly. It's best suited when you're able to
              lead your customer journey throug a positive sales experience. Its
              often used by the customers as a resource center for everything
              for their user journeys.
            </p>
            <span>Rituraj Sinha</span>
            <span>Digital Marketing Head, Diamond Star Financial Services</span>
          </div>
          <div className="card col-3 me-lg-4 p-4 mt-lg-0 mt-5 mb-lg-0 mb-5">
            <img className="rounded-circle mx-auto" src={imgMithun} alt="" />
            <i className="fas fa-quote-left fs-2"></i>

            <p className="ms-5">
              As an overall system, Freshdigital's Conversational Al does a
              great job. I can see it being a valuable tool at multiple levels
              of our organization, not just from a sales and support
              perspectives. It helps to improve the initial website visit for
              any lead prospect, or existing customer.
            </p>
            <span>Mithun Patil</span>
            <span>Digital Marketing Head, Mybike.bz</span>
          </div>
          <div className="card col-3 p-4 mt-lg-0 mt-5">
            <img className="rounded-circle mx-auto" src={imgDebashish} alt="" />
            <i className="fas fa-quote-left fs-2"></i>

            <p className="ms-5">
              Freshdigital's Conversational Al makes it easy for us to share
              right information to the right people at right time based on their
              intent, and it makes the whole customers sales and support
              experience simple and uper fast. It's helped our delivery to make
              competitive advantage and the brand experience we were striving
              for.
            </p>
            <span>Debashish Gupta</span>
            <span>Business Head, Rainbow Financial Services</span>
          </div>
        </div>
      </div>
      {/* cta */}
      <div className="p-lg-5 px-4 py-5 text-center" id="cta">
        <h2 className="mb-5">UPGRADE YOUR BUSINESS TO NEXT LEVEL</h2>
        <p className="d-inline-block fs-5 mb-5">
          Using Al voice/text based demand generation systems to understand the
          real intent of your customers and validate them automatically and
          enable the contact center agents to act swiftly.
        </p>
        <button className="btn btn-dark d-block mx-auto rounded-0 fs-4">
          GET A PERSONALIZED DEMO
        </button>
      </div>
      {/* clients */}
      <div className="py-4" id="clients" style={{ background: "#212529" }}>
        <h2 className="text-white text-center mb-lg-5 mb-3 pb-3">
          Our Clients
        </h2>
        <Clients />
      </div>
    </>
  );
}
