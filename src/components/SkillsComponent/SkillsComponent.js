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
              ASP.NET Core, ASP.NET MVC, Razor Pages, Web API, EF Core, C#, C++, SOLID, Design Patterns, UML, WinForms, WPF
              </p>              
              <p>
              <strong className="text-body-secondary">Frontend:</strong><br/>
              React, JS, HTML, CSS
              </p>
              <p>
              <strong className="text-body-secondary">Deploy:</strong><br/>
              Terminal-based deployment to Hetzner VPS and local home server (Ubuntu, Nginx, systemd, SSH, scp)
              </p>
              <p>
              <strong className="text-body-secondary">Tools:</strong><br/>
              Visual Studio, Visual Studio Code, MS SQL Server Management Studio, Git, GitHub
              </p>
              <p>
              <strong className="text-body-secondary">Databases:</strong><br/>
              PostgreSQL, SQLite, MS SQL Server, T-SQL
              </p>              
            </div>

            {/*Download CV button*/}
            <div>
              <Button 
                variant='outline-success'
                href='/files/Petr_Zalizko_CV_.NET_Dev.pdf'
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
