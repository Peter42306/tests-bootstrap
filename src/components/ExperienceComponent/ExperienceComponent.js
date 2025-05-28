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
            Designing and developing web applications using ASP.NET Core (MVC, Razor Pages, Web API), Entity Framework Core, and React.
          </p>
          <p>
            Experience with both backend and frontend development, relational databases, authentication and authorization (ASP.NET Identity, JWT), and deployment to Linux-based servers.
          </p>
          <p className="text-muted fst-italic mt-2">
            Note: All experience gained through personal and educational projects. Currently seeking a full-time position as a .NET Developer.
          </p>
        </div>
        <Accordion>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>

              
            <p>Created multiple fullstack applications using ASP.NET Core, EF Core, and React.</p>
            <p>Implemented authentication and authorization with ASP.NET Identity and JWT.</p>
            <p>Deployed apps to Hetzner Cloud (Ubuntu, Nginx, systemd) via SSH.</p>
            <p>Used PostgreSQL, SQL Server, and SQLite with code-first migrations.</p>
            <p>Built responsive SPAs using React and Bootstrap.</p>
            <p>Configured VPN (WireGuard) for remote access to server environments.</p>          

            {/* <p>Built several CRUD-based applications using ASP.NET Core MVC, Razor Pages, and Web API with EF Core.</p>
            <p>Created SPAs with React, integrating RESTful APIs for dynamic interaction.</p>
            <p>Worked with PostgreSQL, SQLite, and MS SQL Server in real-world web projects, including code-first migrations.</p>
            <p>Followed SOLID principles, clean architecture, and separation of concerns.</p>
            <p>Deployed fullstack apps to Hetzner VPS running Ubuntu, configured Nginx reverse proxy and systemd services.</p>
            <p>Used Git and GitHub for version control and managed deployment via SSH.</p>
            <p>Focused on modular UI/UX with React and Bootstrap; ensured responsive layout and usability.</p>
            <p>Configured WireGuard VPN on Hetzner VPS for secure access.</p>
            <p>Regularly work in Linux terminal, managing firewalls, processes, and services.</p>
            <p>Set up a personal home server (Ubuntu) for learning, testing, and backups.</p>
            <p>Installed and configured Windows and Microsoft Office for daily tasks and testing purposes.</p>
            <p>Developed several CRUD-based applications using ASP.NET Core MVC, Razor Pages, and Web API with Entity Framework Core.</p>
            <p>Created single-page applications (SPA) using React with RESTful API integration.</p>
            <p>Various projects using C++, C#, WinForms, WPF and ASP.NET Core covering console, desktop and web applications.</p>
            <p>Applied Authorization, Authentication, JWT tokens for projects with ASP.NET core Web API from backend and React from fromend.</p>
            <p>Used PostgreSQL, SQLite and MS SQL Server in real-world web projects with relational data modeling.</p>
            <p>Focused on clean architecture, separation of concerns, and SOLID principles.</p>
            <p>Published and hosted fullstack projects on a Linux server (Hetzner) using Nginx and systemd services.</p>
            <p>Practiced Git-based version control and deployed updates via SSH.</p>
            <p>Gained practical experience in UI/UX layout with Bootstrap, responsiveness, and modular React components.</p>
            <p>Installed and configured WireGuard VPN on a Hetzner cloud server for secure remote access.</p>
            <p>Worked extensively with Linux terminal (Ubuntu), SSH access, systemd services, and firewall configuration on Hetzner server.</p>
            <p>Deployed ASP.NET Core web applications and configured Nginx as a reverse proxy for production hosting.</p>
            <p>Set up a personal Linux-based home server for learning and backup purposes.</p>
            <p>Installed Windows and licensed Microsoft Office on a personal laptop for local testing and daily use.</p> */}
            
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
            Over 25 years of experience in marine and cargo inspections, working for various survey companies across Europe and beyond.
          </p>                    
          <p className="text-muted fst-italic mt-2">
            Note: Previous professional background.
          </p>
        </div>

        <Accordion>
          <Accordion.Item eventKey='0'>            
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>            
              <p>
            Conducted, arranged and coordinated marine and cargo inspections in Ukraine, Romania, Moldova, Bulgaria, Hungary, Netherlands, Belgium, Spain, Italy, Greece, China, Mexico, Egypt.
          </p>                    
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
              <p>Bunker Survey (On-Hire / Off-Hire / bunker survey during bunkering operations).</p>
              <p>Ship's Condition Survey (On-Hire / Off-Hire / P&I / H&M / Pre-Purchase / Follow-Up).</p>
              <p>Holds and Tanks inspection (suitability before loading of the intended cargo).</p>
              <p>Hatch covers inspection (visual inspection and ultrasonic testing for watertightness).</p>
              <p>Damage Survey, investigations of maritime incidents (collisions, damage to shore facilities, oil spills, groundings, ballast water issues, etc.).</p>
              <p>Vegetable Oil Inspections (loading and discharging supervision & sampling as per FOSFA).</p>
              <p>Grain Inspections (loading and discharging supervision & sampling as per GAFTA).</p>
              <p>Mineral Cargoes Inspections (loading and discharging supervision, sampling, can tests).</p>
              <p>Perishable goods (bananas, fruits, frozen products, containers & warehouse inspections).</p>
              <p>Steel Products (steel pre-shipment inspections, loading & lashing supervision, tally count organization).</p>

              <hr/>

              <h6 className="text-body-secondary"><FaList className='me-2 text-success'/><strong>Trainings</strong></h6>
              <p>Conducted trainings for seafarers at an international training center, covering draught survey and bunker survey calculations.</p>                        

            {/*Download CV button*/}
            <div className='mt-4'>
              <Button 
                variant='outline-success'
                href={`${process.env.PUBLIC_URL}/files/Petr Zalizko_CV_Marine_Surveyor.pdf`}
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
