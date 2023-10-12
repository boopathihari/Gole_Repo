import React, { useState, useRef } from 'react';
import './Sell.css';

export default function SellProduct() {
  const [image, setImage] = useState(null);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null); // Create a ref for the file input element

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file ? URL.createObjectURL(file) : null);
  };

  const handleImageDelete = () => {
    setImage(null); // Clear the image state
    // Clear the file input by setting its value to an empty string
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server or perform some action.
    // Simulate a successful submission for demonstration purposes.
    setSubmitted(true);
  };

  return (
    <div className="sell-product-container">
      <h1>Sell Your Product</h1>
      {submitted ? (
        <div>
          <p>Thank You for uploading the product for sale!</p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="image">Upload Product Image:</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef} // Assign the ref to the file input element
                required // Require a single file upload
              />
              {image && (
                <div className="image-preview">
                  <img src={image} alt="Product Preview" style={{ width: '20%' }} />
                  <button onClick={handleImageDelete} className="delete-button">
                    Delete Image
                  </button>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="amount">Enter Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter amount..."
                required
              />
            </div>
            <div>
              <label htmlFor="description">Product Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter product description..."
                required
              />
            </div>
            
            <button type="submit">Sell Product</button>
          </form>
        </div>
      )}
    </div>
  );
}
