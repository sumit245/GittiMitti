import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import products from "./products";
import Header from "./Header";


const Service = () => {

  const navigate = useNavigate();

  const handleViewMore = (route) => {
    navigate(`/${route}`); // Use backticks for template literals to interpolate variables
  };
  const handleInquireNow = () => {
    // Logic to show modal or handle inquiry
    alert('Inquire Now clicked!');
  };
  
  return (
    <>
    <section className="ptb-30 bg-grey">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            LATEST TOP TRENDING <span>PRODUCTS</span>
          </h2>
          <div className="divider">
            <img
              src="https://www.rodidust.com/assets/images/icon/divider.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-3" key={index}>
              <div className="popular-todo-item">
                <div className="todo-thumbnail-area">
                  <figure className="item-thumb">
                    <img src={product.img} alt={product.alt} />
                  </figure>
                  <div className="todo-overlay-info">
                    <div className="todo-type rated">top rated</div>
                  </div>
                </div>
                <div className="todo-content">
                  <h3 className="title">
                    <a>{product.title}</a>
                  </h3>
                  <a  className="btn btn-style-main first" onClick={() => handleViewMore(product.route)}>
                    View More
                  </a>
                  <button
                      className="btn btn-style-main-dark second"
                      onClick={handleInquireNow}
                    >
                      Inquire Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Service;
