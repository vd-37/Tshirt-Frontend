import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";
import Menu from "./Menu";
import "../styles.css";
import Card from "./Card";
import { Twitter as TwitterIcon } from "@material-ui/icons";
import { Facebook as FacebookIcon } from "@material-ui/icons";
import { Instagram as InstagramIcon } from "@material-ui/icons";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div className="home">
      <div className="row bg-image">
        <div className="col-md-6">
          <Menu />
        </div>
        <div className="col-md-6 text-light tagline">
          <h1>WrogX Clothing </h1>
        </div>
      </div>
      <div className="row padding">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-md-3 mb-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
      <footer class="p-4">
        <div className="icons m-2">
          <InstagramIcon className="m-2"/>
          <TwitterIcon className="m-2"/>
          <FacebookIcon className="m-2"/>
        </div>
        <p>© 2022 Wrog-X clothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
