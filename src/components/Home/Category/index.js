import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spin } from 'antd';

const Category = () => {
  const [categoryList, setCategoryList] = useState(null);
  const [catErr, setCatErr] = useState(null);

  // api for fetching categories
  const fetchCategory = async()=> {
    try {
      const response = await axios.get("https://localhost:7290/api/categories")
      console.log(response.data, "res");
      setCategoryList(response.data);
    } catch (error) {
      // console.log(error, "Wahala")
      setCatErr(error)
      setTimeout(() => {
        fetchCategory();
      }, 4000);
    }
  }

  useEffect(()=> {
    fetchCategory();
  },[])
  return (
    <section className="bg-white pt-0">
      <div className="container">
        <div className="d-flex gap-4 justify-content-center flex-wrap">
          {catErr != null ? <div>Error Occured !!!</div> :
          categoryList == null ? <Spin/>:
          categoryList.map((category, key) => {
            return (
              <Link to={`category/${category.categoryId}`}>
                <div
                  key={key}
                  style={{ backgroundImage: `url(${category.categoryImage})` }}
                  className="category-pic"
                >
                  <div className="category-pic-overlay">
                    <div className="text-center">
                      <p className="mb-0">Customed Tailored</p>
                      <h3 className="white-text">{category.categoryName}</h3>
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
