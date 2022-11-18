import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { categoryList } from "../../Home/Category/categoryList";
import { Link } from "react-router-dom";

const CategorySidebar = ({sidebar, toggle}) => {
  return (
    <div className={`${sidebar && "d-none"} category-sidebar`}>
      {categoryList.map((category, key) => {
        return (
          <Link onClick={toggle} key={key} to='/category'>
            <div className="category-side-bar-item" >
              <KeyboardDoubleArrowRightIcon /> {category.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
