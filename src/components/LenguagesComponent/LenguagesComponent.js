import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGlobeAmericas, } from 'react-icons/fa';


const LenguagesComponent = () => (
  <Card className='mt-3'>
    <Card.Body>
            <h4 className="mb-4 text-body-secondary">
              <FaGlobeAmericas className="me-2 text-success" />
              Languages
            </h4>

            <div>
              <span>English: Advanced</span><br/>
              <span>Russian: Native</span><br/>
              <span>Ukrainian: Native</span><br/>              
            </div>
          </Card.Body>
  </Card>
);

LenguagesComponent.propTypes = {};

LenguagesComponent.defaultProps = {};

export default LenguagesComponent;
