import React from "react";
import Product1 from "../assets/Images/paneertikka.jpg";
import Product2 from "../assets/Images/mushbiriyani.jpg";
import Product3 from "../assets/Images/ramen.jpg";
import Product4 from "../assets/Images/butternaan.jpg";
import Product5 from "../assets/Images/spaghetti.jpg";
import Product from "./Product";
import { Link } from "react-router-dom"; 

const Products = () => {
  return (
    <div className="container py-5" >
      <div className="d-flex justify-content-between">
        <h3 className="text-success" id="specials">Todays Specials</h3>
        <button className="btn btn-transparent fw-bold px-3 rounded-0 border border-success">
            <Link className="nav-link px-2 menu-color" to="/mainmenu">
              Menu
            </Link>
        </button>
      </div>
      <div className="row mt-5">
        <Product
          Image={Product1}
          Name="Paneer Tikka"
          Price="100"
          Color="p1color"
        />
        <Product
          Image={Product2}
          Name="Mushroom Biriyani"
          Price="110"
          Color="p2color"
        />
        <Product
          Image={Product3}
          Name="Ramen"
          Price="120"
          Color="p3color"
        />
        <div className="col-12 col-md-6">
          <div className="p-1">
            <div className="border shadow-sm d-flex p4color">
              <div className="text-center px-0 px-lg-2">
                <img src={Product4} alt="" className="p-Image" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h3>Butter-Naan and Paneer Butter Masala</h3>
                <p>₹150</p>
                <button className="btn bg-white rounded -0">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-1">
            <div className="border shadow-sm d-flex p4color">
              <div className="text-center px-0 px-lg-2">
                <img src={Product5} alt="" className="p-Image" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h3>Spaghetti Carbonara</h3>
                <p>₹140</p>
                <button className="btn bg-white w-100 rounded-0">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
