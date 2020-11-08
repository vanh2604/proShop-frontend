import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Product from '../components/Product';
import ProductCarosel from '../components/ProductCarosel';
import { getProductList } from '../redux/actions/fetchProductApi.action';

const HomeScreen = () => {
  const products = useSelector((state) => state.productReducer.productLists);
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const renderProducts = () => {
    return products.map((product, index) => (
      <Col key={index} sm={12} md={6} lg={4} xl={3}>
        <Product product={product} />
      </Col>
    ));
  };

  if (isLoading) {
    return <Loader />;
  } else
    return (
      <>
        <ProductCarosel />
        <h2>THE LATEST PRODUCTS</h2>
        <Row>{renderProducts()}</Row>
      </>
    );
};

export default HomeScreen;
