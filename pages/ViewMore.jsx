import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ViewMore.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { productsData } from "./Aggregate";
import Navbar from "../components/Navbar";

const ViewMore = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    // dispatch(selectProduct(product));
    navigate('/productDescriptiontemp');
  };
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const products = useSelector((state) => state.products.list);

  // useEffect(() => {
  //   dispatch(setProducts(productsData));
  // }, [dispatch]);



  // const navigate = useNavigate();

  // const handleNavigation = (product) => {
  //   navigate("/productDescriptiontemp", { state: { product } });
  // };

  return (
    <>
      <Navbar />
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          zIndex: "2",
          backgroundImage:
            'url("https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "35vh", // Adjust height as needed
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
        }}
      >
        <p
          style={{
            color: "white",
            padding: "150px",
            fontWeight: "bold",
            fontSize: "38px",
          }}
        >
          Aggregate
        </p>
      </div>
      <div className="col-lg-8">
        <main className="site-main">
          <div className="section-header text-left">
            <h2 className="section-title">Product Description</h2>
          </div>

          {/* {products.map((product) => ( */}
          <div className="popular-todo-item todo-item-list">
            <div className="todo-thumbnail-area">
              <figure className="item-thumb">
                <img src="https://5.imimg.com/data5/ANDROID/Default/2020/8/IG/OC/HI/63809717/product-jpeg-500x500.jpeg" alt="Thumbnail" />
              </figure>
            </div>
            <div className="content-entry-wrap">
              <div className="todo-content services">
                <h3 className="title service-head">
                  <a onClick={handleNavigation}>
                    10 mm Aggregate (Rodi)
                    <span className="readmore">View more</span>
                  </a>
                </h3>
                <div className="todo-meta">
                  <div className="todo-location">Quality :</div>
                  <div className="todo-number">Class 1</div>
                </div>
                <div className="todo-meta">
                  <div className="todo-location">Product Size:</div>
                  <div className="todo-number">10 mm</div>
                </div>
                <div className="todo-meta">
                  <div className="todo-location">Brand :</div>
                  <div className="todo-number">Rodi Dust</div>
                </div>
                <div className="todo-summary">
                  <p>"The 10 mm Aggregate Stone Rodi is a versatile limestone product.</p>
                </div>
              </div>
              <div className="todo-footer view-more">
                {/* {product.contactNumbers.map((number, index) => ( */}
                <a
                  // href=productDescriptiontemp
                  className="todo-cat todo-cat-restaurant"

                >
                  <span className="icon-phone" /> 919582872872
                </a>
                {/* ))} */}
              </div>
            </div>
          </div>
          {/* ))} */}

          <div className="single-listing-todo">
            <div className="section-header text-left">
              <h2 className="section-title">Additional Details</h2>
            </div>
            {/* Additional details content here */}
            <h4>Aggregate</h4>
            <p>
              The building material used in various construction processes,
              known as aggregate or commonly called Rodi is exceptionally
              versatile and is effectively used in a range of works – from
              creating a seating area within a garden to creating a hardwearing
              and cost effective driveway. It is the inert material mixed with a
              binding material (cement,lime) in the preparation of mortar and
              concrete. It is one of the three principle ingredient of concrete.
              It comes in different sizes. So, in concrete these pieces of
              aggregate are bound together by mixture of cement, stone dust/
              crushed sandand water to produce a material which is initially
              moldable and with time developed strength and become stiff. The
              easiest way to choose right type of aggregate is to choose best
              building material supplier near me, as a good construction
              material supplierwill supply right type of aggregate along with
              its thorough knowledge.
            </p>
            <p>
              At Rodidust building material suppliers in Gurgaon, Delhi NCR. We
              offer a wide range of aggregates that suit in plethora of
              construction projects.{" "}
            </p>

            <br />
            <br />

            <h4>Types of Aggregate</h4>
            <p>There are 2 types of aggregates –</p>
            <p>
              <b>1. Coarse aggregate-</b>The irregular broken pieces of stone is
              known as coarse aggregate. This type of aggregate retains over
              4.75 mm sieve. Usually, its diameter ranges from 10mm to 65mm.
            </p>
            <p>
              Coarse Aggregate can be broken into the required sizes. Most
              commonly used Coarse Aggregates in various construction projects
              are illustrated as under:
            </p>
            <ul className="service-list awwl">
              <li>
                <span>✓</span> <b>10mm Aggregate- </b>10 mm aggregate with bulk
                density of 1478 kg/m<sup>3</sup> is mainly utilized in
                preparation of RMC. In this process, it is also mixed with other
                aggregates depending upon type of application. 10mm Aggregate is
                also known by the name of ‘Zeera Rodi’ in layman language.
              </li>
              <li>
                <span>✓</span> <b> 20mm Aggregate-</b>Most commonly used
                aggregatesin construction process are 20mm aggregates. These are
                basically used in mix designs or nominal designs. It has density
                of 1560kg/m<sup>3</sup>. 20 mm Aggregate is also known by the
                name of ‘Pona Inchi’ in local language.
              </li>
              <li>
                <span>✓</span> <b>40mm Aggregate-</b>It is used where there is
                no restriction to flow of concrete.For mass concreting like
                base-foundation of structure where the requirement of RMC is way
                more, these aggregates are helpful in that construction process.
                This is also called as ‘Vapsi Rodi’.
              </li>
              <li>
                <span>✓</span> <b>65mm Aggregate- </b>It is type of aggregate
                with bulk density of 1680 kg/m<sup>3</sup> used in construction
                of bridges, driveways, roads, borders, etc.{" "}
              </li>
            </ul>
            <p>
              <b>2. Fine aggregate- </b>The aggregate which passes through sieve
              size of 4.75mm and retain on 0.075mm sieve is known as fine
              aggregate. The aggregate falling under size of 4.75mm to 150µm is
              considered as fine aggregate. These are small size filler
              materials in construction. Crushed sand, River sand and Crushed
              stone sand are the major sources of fine aggregates. These
              aggregates have higher surface area. The main function of these
              aggregates is to fill up the voids between coarse aggregates.
              These could be used in plaster, mortar, concrete, filling of road
              pavement layers etc.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ViewMore;
