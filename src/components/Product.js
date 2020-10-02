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
            <Button color="primary">Mua ngay</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Product;
