import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      style={{ width: 100, height: 100, display: 'block', margin: 'auto' }}
      animation="border"
      role="status"
    />
  );
};

export default Loader;
