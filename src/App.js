import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Product from "./components/Product";

class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "Mèo",
        price: 10000000,
        image:
          "https://topdev.vn/blog/wp-content/uploads/2019/07/su-khac-nhau-giua-ai-machine-learning-va-deep-learning1.jpg",
        status: true,
      },
      {
        id: 2,
        name: "Chó",
        price: 15000000,
        image:
          "https://i.pinimg.com/originals/64/aa/4c/64aa4cb31e0a64ec096c41f45c8de878.png",
        status: true,
      },
    ];
    let elements = products.map((product, index) => {
      let result = "";
      if (product.status) {
        return (result = (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ));
      }
      return result;
    });
    return (
      <div>
        <Navbar className="sticky-top" color="dark" light expand="md">
          <NavbarBrand href="/">Props</NavbarBrand>
        </Navbar>

        <div className="container">
          <div className="d-flex mt-5">{elements}</div>
        </div>
      </div>
    );
  }
}

export default App;
