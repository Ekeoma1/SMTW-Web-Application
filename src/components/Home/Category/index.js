import React from "react";
import { categoryList } from "./categoryList";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="bg-white pt-0">
      <div className="container">
        <div className="d-flex gap-4 justify-content-center flex-wrap">
          {categoryList.map((category, key) => {
            return (
              <Link to={`category/${category.link}`}>
                <div
                  key={key}
                  style={{ backgroundImage: `url(${category.picture})` }}
                  className="category-pic"
                >
                  <div className="category-pic-overlay">
                    <div className="text-center">
                      <p className="mb-0">Customed Tailored</p>
                      <h3 className="white-text">{category.label}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
