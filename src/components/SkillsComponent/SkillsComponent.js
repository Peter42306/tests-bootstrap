import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { FaDownload, FaTools } from 'react-icons/fa';


const SkillsComponent = () => (
  <section id='skills'>  
  <Card className='mt-3 '>
    <Card.Body className='px-0'>
            <h4 className="mb-4 text-body-secondary">
              <FaTools className="me-2 text-success" />
              Skills
            </h4>

            <div>

              <div className='mb-3'>
                <div><strong className="text-body-secondary">Backend:</strong></div>              
                <div>C# &bull; ASP.NET Core (Web API, MVC)</div>
                <div>EF Core (Code First, Migrations, LINQ)</div>
                <div>ASP.NET Identity &bull; JWT Authentication &bull; Google OAuth</div>
                <div>REST API Design &bull; Dependency Injection &bull; Background Services &bull; SOLID Principles</div>              
              </div>              

              <div className='mb-3'>
                <div><strong className="text-body-secondary">Databases:</strong></div>
                <div>PostgreSQL &bull; SQLite &bull; MS SQL Server</div>
              </div>              

              <div className='mb-3'>
                <div><strong className="text-body-secondary">Frontend:</strong></div>
                <div>React &bull; JavaScript &bull; HTML &bull; CSS &bull; Bootstrap &bull; W3.CSS</div>
              </div>

              <div className='mb-3'>
                <div><strong className="text-body-secondary">Deployment:</strong></div>
                <div>Linux (Ubuntu Server) &bull; Docker &bull; Docker Compose &bull; Nginx &bull; systemd &bull; SSH &bull; Cloud VPS &bull; Object Storage (S3 API)</div>
              </div>              

              <div>
                <div><strong className="text-body-secondary">Tools & Libraries:</strong></div>
                <div>Visual Studio &bull; Visual Studio Code &bull; Git &bull; GitHub</div>
                <div>FluentValidation &bull; SendGrid &bull; QuestPDF &bull; ClosedXML &bull; ImageSharp &bull; MetadataExtractor &bull; AutoMapper &bull; MapTiler</div>
              </div>              

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
