import React, { useEffect } from "react";
import categories from "../../../content/categories.json";
import { Footer, Nav } from "../index";
import { Category } from "./Category/Category";
import "./Services.styles.scss";
import { ICategory } from "../../../interfaces/cms";

export const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav color="black" disabledMenuOption="/services" isNavVisible={true} isPlaying={false} />
      <div className="services-container">
        <div className="services-header">
          <h1 className="title">Services</h1>
          {false && <h3 className="subtitle">Subtitle</h3>}
          <img src="assets/Services-header.png" alt="Header" />
        </div>
        <div className="services-content">
          {categories.map((category: ICategory, index: number) => (
            <div className="category" key={index}>
              <Category {...category} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
