import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Container className="text-center py-2">
        <Row>
          <Col>Copyright &copy; proShop</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
