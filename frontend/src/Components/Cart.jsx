import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { removeFromCart } from "../actions/cartActions";

const CartComponent = ({ match, location, history }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <ListGroup className='cart'>
      {!cartItems ? (
        <ListGroup.Item>Nothing in cart</ListGroup.Item>
      ) : cartItems.length === 0 ? (
        <ListGroup.Item className='text-center'>Cart is empty!</ListGroup.Item>
      ) : (
        cartItems.map((item) => (
          <ListGroup.Item key={item.product}>
            <Row>
              <Col md={4}>
                <Link to={`/product/${item.product}`}>
                  <Image src={item.image} alt={item.name} fluid rounded></Image>
                </Link>
              </Col>
              <Col md={5}>
                <p>
                  £{item.price} x {item.qty}
                </p>
                <p>{item.name}</p>
              </Col>
              <Col md={1}>
                <Button
                  type='button'
                  variant='light'
                  onClick={() => removeFromCartHandler(item.product)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))
      )}
      {cartItems && cartItems.length > 0 ? (
        <ListGroup.Item>
          <Link to='/cart'>
            <Button className='btn-block'>Go to cart</Button>
          </Link>
        </ListGroup.Item>
      ) : null}
    </ListGroup>
  );
};

export default CartComponent;
