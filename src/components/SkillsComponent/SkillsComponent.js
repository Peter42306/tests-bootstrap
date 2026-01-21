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
              C#, ASP.NET Core (MVC, Web API)<br/>
              ASP.NET Identity<br/>
              Entity Framework Core (Code First, Migrations, LINQ)<br/>
              Dependency Injection, SOLID Principles, Design Patterns
              </p>              
              <p>
              <strong className="text-body-secondary">Databases:</strong><br/>
              PostgreSQL, SQLite, MS SQL Server<br/>              
              Tools: pgAdmin, SSMS, DB Browser 
              </p>              
              <p>
              <strong className="text-body-secondary">Frontend:</strong><br/>
              React, JavaScript, HTML, CSS, Bootstrap
              </p>              
              
              <p>
              <strong className="text-body-secondary">Deployment:</strong><br/>
              Linux (Ubuntu Server)<br/>
              Docker, Docker Compose (multi-container applications)
              Nginx, systemd, SSH, scp<br/>
              VPS hosting (Hetzner) 
              </p>              
              <p>
              <strong className="text-body-secondary">Tools:</strong><br/>
              Visual Studio, Visual Studio Code<br/>
              Git, GitHub<br/>
              SendGrid (email service)<br/>
              QuestPDF (PDF export)<br/>
              ClosedXML (Excel export)<br/>
              ImageSharp (image processing)<br/>
              MetadataExtractor<br/>
              AutoMapper
              </p>
            </div>

            {/*Download CV button*/}
            {/* <div>
              <Button 
                variant='outline-success'
                href={`${process.env.PUBLIC_URL}/files/Petr_Zalizko_CV_.NET_Dev.pdf`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaDownload className='me-2'/>
                Download CV
              </Button>
            </div> */}
          </Card.Body>
  </Card>
  </section>
);

SkillsComponent.propTypes = {};

SkillsComponent.defaultProps = {};

export default SkillsComponent;
