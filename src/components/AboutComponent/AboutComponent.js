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
                .NET Developer focused on building full-stack web applications using ASP.NET Core, React and PostgreSQL.
              </p>              
              <p>
                Experienced in REST APIs design, deploying applications on Linux servers and integrating S3-compatible object storage.
              </p>
              <p>
                Based in Constanta, Romania.
              </p>

              {/* <p>
                .NET Developer with experience building full-stack web applications using ASP.NET Core, EF Core, PostgreSQL, and React.
              </p>               */}
              {/* <p>
                Experience deploying and maintaining applications on Linux servers.
              </p>                             */}
              
              {/* <p>
                Based in Constanta, Romania. Open to relocation and remote work.
              </p>                             */}
                            
            </div>
          </Card.Body>
  </Card>
  </section>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
