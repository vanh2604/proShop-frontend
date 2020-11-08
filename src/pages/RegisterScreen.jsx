/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register } from '../redux/actions/register.action';

const RegisterScreen = ({ history, location }) => {
  const { loading, error, userInfo } = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required name';
      }
      if (!values.email) {
        errors.email = 'Required email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email';
      }

      if (!values.password) {
        errors.password = 'Required password';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be longer than 8 characters';
      }
      if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Required confirm password';
      } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'confirm password does not match';
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(
        register({ name: values.name, email: values.email, password: values.password })
      );
    },
  });

  const redirect = location.search ? location.search.split(' ')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo]);

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter name"
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.name}</Form.Text>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter email"
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="Enter password"
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.password}</Form.Text>
        </Form.Group>
        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            type="password"
            placeholder="Enter confirm password"
          ></Form.Control>
          <Form.Text className="text-danger">{formik.errors.passwordConfirm}</Form.Text>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
