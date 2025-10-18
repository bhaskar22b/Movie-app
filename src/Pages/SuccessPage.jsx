import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Css/Sucess.css"

const SuccessPage = () => {
  const location = useLocation(); // to receive data
  const navigate = useNavigate();
  const userData = location.state?.userData || {};   // store all data that sent   / store error in {}

  return (
    <section className="sucess-page">
        <div className="success-page">
      <h1>Form Submitted Successfully!</h1>
      <h3>Here’s what you submitted:</h3>

      <div className="submitted-data">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Country:</strong> {userData.country}</p>
      </div>

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
    </section>
  );
};

export default SuccessPage;
