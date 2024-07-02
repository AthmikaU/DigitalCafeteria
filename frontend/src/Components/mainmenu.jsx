import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "North Indian", path: "/nindian" },
  { name: "South Indian", path: "/sindian" },
  { name: "Snacks", path: "/snacks" },
  { name: "Beverages", path: "/beverages" },
];

const MainMenu = () => {
    const navigate = useNavigate();
  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {categories.map((category) => (
          <div key={category.name} className="col">
            <div
              className="card"
              onClick={() => handleCategoryClick(category.path)}
            >
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;