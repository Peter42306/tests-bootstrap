import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


const AboutComponent = () => (
  <section id='about'>
  <Card className='mt-3'>
    <Card.Body>
            <h4 className="mb-4 text-body-secondary">
              <FaUser className="me-2 text-success" />
              About
            </h4>

            <div>
              <p>
              I’m a Full Stack Developer focused on building web applications using ASP.NET Core and React, with deployment to Linux servers such as Hetzner VPS and a home-based Ubuntu server.              
              </p>
              <p>
              Currently, I’m looking for opportunities to apply my skills professionally.
              </p>
            </div>
          </Card.Body>
  </Card>
  </section>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
