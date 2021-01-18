import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";
import { Cart } from "react-bootstrap-icons";
const Header = ({ history }) => {
  const [numberInCart, setNumberInCart] = useState("0");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const numInCart = cartItems
    ? cartItems.reduce((acc, item) => acc + Number(item.qty), 0)
    : 0;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setNumberInCart(numInCart);
  }, [numberInCart, numInCart]);

  return (
    <header>
      <Navbar
        sticky='top'
        expand='lg'
        collapseOnSelect
        className='bg-dark'
        variant='dark'
      >
        <LinkContainer to='/'>
          <Navbar.Brand>
            <span className='orangeText'>Pro</span>Shop
          </Navbar.Brand>
        </LinkContainer>
        <Route render={({ history }) => <SearchBox history={history} />} />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            <Nav.Link>
              <LinkContainer to='/cart'>
                <div style={{ position: "relat" }}>
                  <Cart style={{ fontSize: "1.5rem" }}></Cart> (
                  {cartItems ? <span>{numberInCart}</span> : <span>0</span>})
                </div>
              </LinkContainer>
            </Nav.Link>
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>User List</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderslist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
