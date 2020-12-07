import React from "react";
import { Aside, Nav } from "../components/index";
import "../scss/shop.scss";

const Shop = () => {
  return (
    <div className="shop">
      
      <div className="body-box">
        <aside>
          <Aside />
        </aside>
        <section className="shop-section">Shop</section>
      </div>
    </div>
  );
};

export default Shop;
