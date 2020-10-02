import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
class Product extends Component {
  // Cách 1:
  onAddToCart = () => {
    alert("Mua thành công: " + this.props.name + "-" + this.props.price);
  };
  constructor(props) {
    super(props);
    this.onAddToCart2 = this.onAddToCart.bind(this);
  }
  // Cách 2:
  onAddToCart2() {
    alert("Mua thành công: " + this.props.name + "-" + this.props.price);
  }
  render() {
    return (
      <div>
        <Card className="mr-4">
          <CardImg
            top
            width="100%"
            src={this.props.image}
            alt={this.props.name}
          />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.price} VNĐ</CardText>
            <Button className="mr-2" color="primary" onClick={this.onAddToCart}>
              Mua ngay 1
            </Button>
            <Button color="primary" onClick={this.onAddToCart2}>
              Mua ngay 2
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Product;
