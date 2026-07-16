import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCalendarAlt, FaGraduationCap, } from 'react-icons/fa';


const EducationComponent = () => (
  <section id='education'>  
  <Card className='mt-3'>
    <Card.Body className='px-0'>
        <h4 className="mb-4 text-body-secondary">
          <FaGraduationCap className="me-2 text-success" />
          Education
        </h4>

        {/* Block 1 */}
        <div className="mb-4">
          <h6 className="text-body-secondary"><strong>IT STEP Academy, Odessa, Ukraine</strong></h6>
          <p className="text-muted">
            <FaCalendarAlt className="me-3 text-success"/>
            <span className="text-success">2022 - 2024</span>
          </p>
          <p>
          Software Development
          </p>          
        </div>

        <hr />

        {/* Block 2 */}
        <div className="mt-4">
          <h6 className="text-body-secondary"><strong>Odessa State Maritime University, Odessa, Ukraine</strong></h6>
          <p className="text-muted">
            <FaCalendarAlt className="me-3 text-success" />
            <span className="text-success">1991 - 1996</span>
          </p>
          <p>
          Maritime Transport Management
          </p>          
        </div>
      </Card.Body>
  </Card>
  </section>
);

EducationComponent.propTypes = {};

EducationComponent.defaultProps = {};

export default EducationComponent;
