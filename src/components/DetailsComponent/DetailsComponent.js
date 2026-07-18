import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';


const DetailsComponent = () => (
  <Card className='mt-3'>
    {/* <Card.Img variant='top' src='/images/IMG_20240723_191756_1.jpg' alt='profile photo'/> */}
    
    <Card.Img variant='top' src={`${process.env.PUBLIC_URL}/images/IMG_20240723_191756_1.jpg`} alt='profile photo'/>
      <Card.Body className='px-0'>
        <h4 className="mb-4 text-body-secondary">Petr Zalizko</h4>
        {/* <p><FaUser className="me-3 text-success" /><span >.NET Developer</span></p>      
        <p><FaLocationDot className="me-3 text-success" /><span >Constanta, Romania</span></p>
        <p><FaEnvelope className="me-3 text-success" /><span >pzalizko@gmail</span></p>      */}
        <div className='mb-2'><FaUser className="me-3 text-success" /><span >.NET Developer</span></div> 
        <div className='mb-2'><FaLocationDot className="me-3 text-success" /><span >Constanta, Romania</span></div>
        <div><FaEnvelope className="me-3 text-success" /><span >pzalizko@gmail</span></div>
      </Card.Body>
  </Card>
);

DetailsComponent.propTypes = {};

DetailsComponent.defaultProps = {};

export default DetailsComponent;
