import React, { useState } from "react";
import "./admin.css";
import Nav from "../../ReusableNav";
import Search from "../Reusablesearch";
import Add_post from "./Add_post";
import AddCategory from "./AddCategory";

function Posts() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
    
  };
  const openCategoryPopup = () =>{
    setShowCategoryPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  };
  const closeCategoryPopup = () =>{
    setShowCategoryPopup(false);
  }
  return (
    <div className="posts-main">
      <Nav></Nav>
      <div className="admin-child">
        <Search></Search>
      </div>

      <div className="addnewblog">
      <button onClick={openCategoryPopup}>Add new category</button>
        <button onClick={openPopup}>Add new Blog</button>
        
      </div>

     
      {showCategoryPopup && <AddCategory closePopup={closeCategoryPopup} />}

      {showPopup && <Add_post closePopup={closePopup} />}
    </div>
  );
}

export default Posts;
