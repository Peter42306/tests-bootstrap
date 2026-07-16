import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGlobeAmericas, } from 'react-icons/fa';


const LenguagesComponent = () => (
  <Card className='mt-3'>
    <Card.Body className='px-0'>
            <h4 className="mb-4 text-body-secondary">
              <FaGlobeAmericas className="me-2 text-success" />
              Languages
            </h4>          
            
            <p>
              English: Upper Intermediate (B2+)<br/>
              Russian, Ukrainian: Native
            </p>
          </Card.Body>
  </Card>
);

LenguagesComponent.propTypes = {};

LenguagesComponent.defaultProps = {};

export default LenguagesComponent;
