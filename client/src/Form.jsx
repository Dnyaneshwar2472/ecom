import React from "react";

const Form = () => {
  return (
    <>
      <div>Form</div>

      <div className="form-container">
        <h2> Add New Product</h2>
        <form >
          <input
            type="text"
            name="title"
         
    
            placeholder="Enter product title"
            required
          />
          <input
            type="number"
            name="price"
         
            placeholder="Enter price"
            required
          />
          <input
            type="text"
            name="category"
       
            placeholder="Enter category"
            required
          />
          <input
            type="text"
            name="image"
           
            placeholder="Enter image URL"
            required
          />
          <button type="submit">
        Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
