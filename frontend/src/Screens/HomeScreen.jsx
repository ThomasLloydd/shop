import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Paginate from "../Components/Paginate";
import Meta from "../Components/Meta";
import ProductCarousel from "../Components/ProductCarousel";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta></Meta>

      {!keyword && <ProductCarousel></ProductCarousel>}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products
              .filter((product) => !product.name.includes("Sample"))
              .map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Paginate
              style={{ margin: "0 auto" }}
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
              isAdmin={false}
            />
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
