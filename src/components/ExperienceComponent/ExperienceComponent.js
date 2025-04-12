import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { FaDownload, FaList } from 'react-icons/fa6';


const ExperienceComponent = () => (
  <section id='experience'>  
  <Card className='mt-3'>
    <Card.Body>
        <h4 className="mb-4 text-body-secondary">
          <FaBriefcase className="me-2 text-success" />
          Experience
        </h4>

        {/* Developer Block*/}
        <div className="mb-4">
          <h6 className="text-body-secondary"><strong>Software Development / Training & Projects</strong></h6>
          <p className="text-muted">
            <FaCalendarAlt className="me-3 text-success"/>
            <span className="text-success">2021 - Present</span>
          </p>
          <p>
            Developing web applications using ASP.NET Core, Entity Framework and React.
          </p>
          <p>
            Various projects using C++, C#, WinForms, WPF and ASP.NET Core covering console, desktop and web applications.
          </p>
        </div>
        <Accordion>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
            <p>
    Developed several CRUD-based applications using ASP.NET Core MVC, Razor Pages, and Web API with Entity Framework Core.
  </p>
  <p>
    Created single-page applications (SPA) using React with RESTful API integration.
  </p>
  <p>
    Used PostgreSQL, SQLite and MS SQL Server in real-world web projects with relational data modeling.
  </p>
  <p>
    Focused on clean architecture, separation of concerns, and SOLID principles.
  </p>
  <p>
    Published and hosted fullstack projects on a Linux server (Hetzner) using Nginx and systemd services.
  </p>
  <p>
    Practiced Git-based version control and deployed updates via SSH.
  </p>
  <p>
    Gained practical experience in UI/UX layout with Bootstrap, responsiveness, and modular React components.
  </p>
  <p>
    Installed and configured WireGuard VPN on a Hetzner cloud server for secure remote access.
  </p>
  <p>
    Worked extensively with Linux terminal (Ubuntu), SSH access, systemd services, and firewall configuration on Hetzner server.
  </p>
  <p>
    Deployed ASP.NET Core web applications and configured Nginx as a reverse proxy for production hosting.
  </p>
  <p>
    Set up a personal Linux-based home server for learning and backup purposes.
  </p>
  <p>
    Installed Windows and licensed Microsoft Office on a personal laptop for local testing and daily use.
  </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <hr />

        {/* Block 2 */}
        <div className="mt-4">
          <h6 className="text-body-secondary"><strong>Marine Surveyor / Various Survey Companies</strong></h6>
          <p className="text-muted">
            <FaCalendarAlt className="me-3 text-success" />
            <span className="text-success">1995 - Present</span>
          </p>
          <p>
            Conducted, organized and coordinated marine and cargo inspections in Ukraine, Romania, Moldova, Bulgaria, Hungary, Netherlands, Belgium, Spain, Italy, Greece, China, Mexico, Egypt...
          </p>                    
        </div>

        <Accordion>
          <Accordion.Item eventKey='0'>            
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>            
              <h6 className="text-body-secondary"><FaList className='me-2 text-success'/><strong>Experience</strong></h6>
              <ul className="list-unstyled mb-0 ps-0">
                <li>1995-2009 - UMCS - Surveyor</li>
                <li>2009-2018 - UMACS Marine - Chief Surveyor</li>
                <li>2018-2019 - CIS - Surveyor</li>
                <li>2019-2020 - AmSpec - Surveyor</li>
                <li>2020-2021 - AmSpec - Chief Surveyor</li>
                <li>2021-2021 - DPS Marinex - Loss Adjuster / Surveyor</li>
                <li>2021-2022 - Dr. Buschmeyer - Surveyor</li>
                <li>2021-2024 - BST BlackSea Training - Instructor</li>
                <li>2022-2024 - General Survey Inspections - Surveyor / Coordinator</li>
                <li>2024-Present - Freelancer</li>
              </ul>

              <hr/>

              <h6 className="text-body-secondary"><FaList className='me-2 text-success'/><strong>Skills</strong></h6>
              <p>Draught Survey</p>
              <p>Bunker Survey (On-Hire / Off-Hire / During Bunkering Operations)</p>
              <p>Ship's Condition Survey (On-Hire / Off-Hire / P&I / H&M / Pre-Purchase / Follow-Up)</p>
              <p>Holds and Tanks inspection (suitability before loading of the intended cargo)</p>
              <p>Hatch covers inspection (visual inspection and ultrasonic testing for watertightness)</p>
              <p>Damage Survey, investigations of maritime incidents (collisions, damage to shore facilities, oil spills, groundings, ballast water issues, etc.)</p>
              <p>Vegetable Oil Inspections (loading supervision & sampling as per FOSFA)</p>
              <p>Grain Inspections (loading supervision & sampling as per GAFTA)</p>
              <p>Mineral Cargoes Inspections (loading supervision, sampling, can tests)</p>
              <p>Perishable goods (bananas, fruits, frozen products, containers & warehouse inspections)</p>
              <p>Steel Products (steel pre-shipment inspections, loading & lashing supervision, tally count organization)</p>

              <hr/>

              <h6 className="text-body-secondary"><FaList className='me-2 text-success'/><strong>Trainings</strong></h6>
              <p>Conducted trainings for seafarers at an international training center, covering draught survey and bunker survey calculations</p>                        

            {/*Download CV button*/}
            <div className='mt-4'>
              <Button 
                variant='outline-success'
                href='/files/Petr Zalizko_CV_Marine_Surveyor.pdf'
                target='_blank'
              >
                <FaDownload className='me-2'/>
                Download Surveyor's CV
              </Button>
            </div>
            </Accordion.Body>
          </Accordion.Item>          
        </Accordion>
      </Card.Body>
  </Card>
  </section>
);

ExperienceComponent.propTypes = {};

ExperienceComponent.defaultProps = {};

export default ExperienceComponent;
