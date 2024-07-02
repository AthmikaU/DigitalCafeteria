import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

const HProduct = ({ Image, navigation, customImageStyle }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    switch (navigation) {
      case "DASHBOARD":
          navigate("/dashboard");
        break;
      case "MENU":
        navigate("/mainmenu");
        break;
      case "REVIEWS":
         navigate("/reviews");
        break;
      default:
        break;
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
    <div class="col">
      <div class="card shadow-sm">
        <img src={Image} alt="" style={combinedImageStyle} />
        <div class="card-body d-flex justify-content-center align-items-center">
          <p>
            <button className="btn-center btninside" onClick={handleNavigation}>
              {navigation}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HProduct