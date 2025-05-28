import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { FaDownload, FaTools } from 'react-icons/fa';


const SkillsComponent = () => (
  <section id='skills'>  
  <Card className='mt-3'>
    <Card.Body>
            <h4 className="mb-4 text-body-secondary">
              <FaTools className="me-2 text-success" />
              Skills
            </h4>

            <div>

              <p>
              <strong className="text-body-secondary">Backend:</strong><br/>
              C#, ASP.NET Core (MVC, Web API, Razor Pages), Entity Framework Core (Code First), RESTful APIs, Authentication & Authorization (ASP.NET Identity, JWT), SOLID principles, Design Patterns, UML, WinForms, WPF, C++
              </p>              
              <p>
              <strong className="text-body-secondary">Databases:</strong><br/>
              SQL Server, SQLite, PostgreSQL, T-SQL
              </p>              
              <p>
              <strong className="text-body-secondary">Frontend:</strong><br/>
              React, JavaScript, HTML, CSS
              </p>              
              
              <p>
              <strong className="text-body-secondary">Deployment:</strong><br/>
              Linux (Ubuntu Server), VPS Deployment (Hetzner Cloud), Nginx, systemd, SSH, SCP
              </p>              
              <p>
              <strong className="text-body-secondary">Tools:</strong><br/>
              Visual Studio, Visual Studio Code, Git, GitHub, MS SQL Server Management Studio
              </p>
            </div>

            {/*Download CV button*/}
            <div>
              <Button 
                variant='outline-success'
                href={`${process.env.PUBLIC_URL}/files/Petr_Zalizko_CV_.NET_Dev.pdf`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaDownload className='me-2'/>
                Download CV
              </Button>
            </div>
          </Card.Body>
  </Card>
  </section>
);

SkillsComponent.propTypes = {};

SkillsComponent.defaultProps = {};

export default SkillsComponent;
