import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


const AboutComponent = () => (
  <section id='about'>
  <Card className='mt-3'>
    <Card.Body className='px-0'>
            <h4 className="mb-4 text-body-secondary">
              <FaUser className="me-2 text-success" />
              About
            </h4>

            <div>
              <p>
                .NET Developer focused on building full-stack web applications and REST APIs using ASP.NET Core, React and PostgreSQL.
              </p>              
              <p>
                Experienced in deploying applications on Linux servers and integrating S3-compatible object storage.
              </p>
              <p>
                Based in Constanta, Romania.
              </p>              
                            
            </div>
          </Card.Body>
  </Card>
  </section>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
