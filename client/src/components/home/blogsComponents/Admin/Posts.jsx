import React from "react";
import "./admin.css";
import Nav from "../../ReusableNav";
function Posts() {
  return (
    <div className="posts-main">
      <Nav></Nav>
      <div className="admin-child">
        <div className="admin-all">
          <p>All</p>
          <p>Published</p>
          <p>Drafts</p>
        </div>
        <div className="admin-search">
          <input type="text" placeholder="search for a post" />
          <button>Search</button>

        </div>
      </div>


        <div className="table">
            <div className="title"></div>
            <div className="author-name"></div>
            <div className="categories"></div>
            <div className="tags"></div>
            <div className="date"></div>
        </div>

    </div>
  );
}

export default Posts;
