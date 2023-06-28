import axios from "axios";
import React, { useState } from "react";
import { UploadImageToCloudinary } from "./helpers/UploadCloudinary";

function Add_post({ closePopup }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formdata = new FormData(form);
    console.log(...formdata);

    // ! Upload image to cloudinary
    UploadImageToCloudinary(selectedImage)
      .then((result) => {
        // console.log(result.data);
        const imageURL = result.data.secure_url;
        console.log(imageURL);

        const data = {
          heading: formdata.get("heading"),
          meta: formdata.get("meta"),
          image: imageURL,
        };

        // ! Upload image url to server
        axios
          .post("http://localhost:8000/api/add-post", data)
          .then((data) => {
            console.log(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add_blog">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="featured">Featured Image</label>
        <input
          name="featured"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            style={{
              width: "200px",
              height: "auto",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            alt="selected"
          />
        )}
        <textarea name="meta" id="meta" cols="30" rows="10"></textarea>
        <textarea name="heading" id="heading" cols="20" rows="10"></textarea>
        <button type="submit">Create blog</button>
        <button onClick={closePopup}>Close</button>
      </form>
    </div>
  );
}

export default Add_post;
