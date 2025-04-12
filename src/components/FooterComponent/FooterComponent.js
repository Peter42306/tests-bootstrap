import React from 'react';
import { Navbar } from 'react-bootstrap';


const FooterComponent = () => (
  <Navbar expand="lg" className="bg-body-tertiary" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>    
    <small>&copy; 2025 - Petr Zalizko Portfolio</small>
  </Navbar>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
