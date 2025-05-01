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
                I’m a Full Stack Developer building web applications using ASP.NET Core and React.
              </p>
              <p>
                I've deployed several personal and training projects to Linux servers (Hetzner VPS and home server) using Nginx and systemd.              
              </p>
              <p>
                You can find examples of my deployed work in the <strong>Projects</strong> section.
              </p>
              <p>
                Based at Constanta, Romania. Open to relocation and remote work.
              </p>              
              
            </div>
          </Card.Body>
  </Card>
  </section>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
