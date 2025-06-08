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
                I’m a Full Stack Developer specializing in building web applications with ASP.NET Core and React.
              </p>              
              <p>
                You can find some of my deployed applications in the <strong>Projects</strong> section, in the navigation menu above.
              </p>
              <p>
                I work primarily with C#, ASP.NET Core, React, JavaScript, HTML. For data access, I typically use the Code First approach with Entity Framework Core, working with SQLite, PostgreSQL, and SQL Server.
              </p>
              <p>
                Based in Constanta, Romania, and open to full-time opportunities, relocation and remote work.
              </p>              
              
            </div>
          </Card.Body>
  </Card>
  </section>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
