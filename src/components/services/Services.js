import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container container__services">
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
            <li>
              <BiCheck className="=" service__list-icon />
              <p>lorem ,ipusm dolor sit amet consectur elit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
