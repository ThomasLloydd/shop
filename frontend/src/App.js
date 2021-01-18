import "./App.css";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Container>
        <main>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/page/:pageNumber' component={HomeScreen} exact></Route>
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          ></Route>
          <Route path='/search/:keyword' component={HomeScreen}></Route>
          <Route path='/shipping' component={ShippingScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path='/order/:id' component={OrderScreen}></Route>
          <Route path='/payment' component={PaymentScreen}></Route>
          <Route path='/profile' component={ProfileScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/login' component={LoginScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/admin/userlist' component={UserListScreen}></Route>
          <Route path='/admin/user/:id/edit' component={UserEditScreen}></Route>
          <Route
            path='/admin/product/:id/edit'
            component={ProductEditScreen}
          ></Route>
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          ></Route>
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          ></Route>
          <Route path='/admin/orderslist' component={OrderListScreen}></Route>
        </main>
      </Container>
      <Footer></Footer>
    </Router>
  );
};

export default App;
