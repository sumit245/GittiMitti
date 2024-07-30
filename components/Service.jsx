import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import products from "./products";
import Header from "./Header";
import Button from "./Button";


const Service = () => {

  const [bproducts, setBProducts] = useState([])

  const navigate = useNavigate();

  const handleViewMore = (route) => {
    navigate(`/${route}`); // Use backticks for template literals to interpolate variables
  };
  const handleInquireNow = () => {
    // Logic to show modal or handle inquiry
    alert('Inquire Now clicked!');
  };

  useEffect(() => {
    setBProducts(products)
  }, [products])

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
            {bproducts.map((product, index) => (
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

                    <Button action={() => handleViewMore(product.route)} title="View More" />
                    <Button action={handleInquireNow} title="Inquire Now" style={{ backgroundColor: "#000" }} />

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
