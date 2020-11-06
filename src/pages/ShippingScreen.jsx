import { useFormik } from 'formik';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import CheckOutStep from '../components/CheckOutStep';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../redux/actions/Cart.action';

const ShippingScreen = ({ history }) => {
  const { address, city, postalCode, country } = useSelector(
    (state) => state.cartReducer.shippingAddress
  );
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      address: address ? address : '',
      city: city ? city : '',
      postalCode: postalCode ? postalCode : '',
      country: country ? country : 'Việt Nam',
    },
    validate: (values) => {
      const errors = {};
      if (!values.address) {
        errors.address = 'Required address';
      }
      if (!values.city) {
        errors.city = 'Required city';
      }
      if (!values.postalCode) {
        errors.postalCode = 'Required postal code';
      }
      if (!values.country) {
        errors.country = 'Required country';
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(saveShippingAddress(values));
      history.push('/payment');
    },
  });

  return (
    <FormContainer>
      <CheckOutStep step1 step2 />
      <h1>SHIPPING</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            type="text"
            value={formik.values.address}
            placeholder="Enter address"
            onChange={formik.handleChange}
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.address}</Form.Text>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={formik.values.city}
            name="city"
            type="text"
            placeholder="Enter city"
            onChange={formik.handleChange}
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.city}</Form.Text>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            value={formik.values.postalCode}
            name="postalCode"
            type="text"
            placeholder="Enter postal code"
            onChange={formik.handleChange}
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.postalCode}</Form.Text>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            value={formik.values.country}
            name="country"
            type="text"
            placeholder="Enter country"
            onChange={formik.handleChange}
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.country}</Form.Text>
        </Form.Group>

        <Button onClick={formik.handleSubmit} type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
