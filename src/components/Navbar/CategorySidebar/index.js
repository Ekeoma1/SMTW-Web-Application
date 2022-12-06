import React,{useEffect, useState} from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import { categoryList } from "../../Home/Category/categoryList";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Spin } from 'antd'

const CategorySidebar = ({sidebar, toggle}) => {
  const[siderBarItem, setSideBarItem] = useState(null)
  const [sidebarErr, setSidebarErr] = useState(null)

  const fetchSideBar = async () => {
    try {
      const response = await axios.get("https://localhost:7290/api/categories")
      // console.log(response.data)
      setSideBarItem(response.data)
    } catch (error) {
      // console.log(error)
      setSidebarErr(error)
    }
  }

  useEffect(()=> {
    fetchSideBar();
  },[]);
  return (
    <div className={`${sidebar && "d-none"} category-sidebar`}>
      {/* {categoryList.map((category, key) => {
        return (
          <Link onClick={toggle} key={key} to='/category'>
            <div className="category-side-bar-item" >
              <KeyboardDoubleArrowRightIcon /> {category.label}
            </div>
          </Link>
        );
      })} */}

      {sidebarErr != null ? "Error Occured" : siderBarItem == null ? <Spin/> :
      siderBarItem.map((category, key) => {
        return (
          <Link onClick={toggle} key={key} to={`category/${category.categoryId}`}>
            <div className="category-side-bar-item" >
              <KeyboardDoubleArrowRightIcon /> {category.categoryName}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
