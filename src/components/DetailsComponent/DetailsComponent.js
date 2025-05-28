import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';


const DetailsComponent = () => (
  <Card className='mt-3'>
    {/* <Card.Img variant='top' src='/images/IMG_20240723_191756_1.jpg' alt='profile photo'/> */}
    
    <Card.Img variant='top' src={`${process.env.PUBLIC_URL}/images/IMG_20240723_191756_1.jpg`} alt='profile photo'/>
    <Card.Body>
      <h4 className="mb-4 text-body-secondary">Petr Zalizko</h4>
      <p><FaUser className="me-3 text-success" /><span >.NET Developer</span></p>
      <p><FaHome className="me-3 text-success" /><span >Odessa, Ukraine</span></p>
      <p><FaLocationDot className="me-3 text-success" /><span >Constanta, Romania</span></p>
      <p><FaEnvelope className="me-3 text-success" /><span >pzalizko@gmail</span></p>
      <p><FaPhone className="me-3 text-success" /><span >+38 067 480 48 46</span></p>
    </Card.Body>
  </Card>
);

DetailsComponent.propTypes = {};

DetailsComponent.defaultProps = {};

export default DetailsComponent;
