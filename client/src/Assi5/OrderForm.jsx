import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    orderName: '',
    orderPrice: 0,
    userAddress: '',
    creditCardNo: 0,
    dayDate: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/customerOrders', formData);
      alert('Order submitted successfully!');
      setFormData({
        userName: '',
        orderName: '',
        orderPrice: 0,
        userAddress: '',
        creditCardNo: 0,
        dayDate: '',
      });
    } catch (error) {
      console.error('Error submitting order: ', error);
      alert('Error submitting order');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Order Name:</label>
      <input
        type="text"
        name="orderName"
        value={formData.orderName}
        onChange={handleChange}
      />
      {/* ... Other form fields ... */}
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
