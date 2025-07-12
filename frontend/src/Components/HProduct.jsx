import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";

const HProduct = ({ Image, navigation, label, customImageStyle }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (navigation) {
      navigate(navigation);
    }
  };

  const defaultImageStyle = {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "150px",
    objectFit: "contain",
  };

  const combinedImageStyle = { ...defaultImageStyle, ...customImageStyle };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={Image} alt={label} style={combinedImageStyle} />
        <div className="card-body d-flex justify-content-center align-items-center">
          <button className="btn-center btninside" onClick={handleNavigation}>
            {label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HProduct;
