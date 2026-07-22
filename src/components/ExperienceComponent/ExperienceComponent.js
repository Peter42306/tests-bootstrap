import React from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaList } from 'react-icons/fa';



const ExperienceComponent = () => {
  const [openDetails,setOpenDetails] = React.useState(false);
  
  return(
    <section id='experience'>  
  <Card className='mt-3'>
    <Card.Body className='px-0'>
        <h4 className="mb-4 text-body-secondary">
          <FaBriefcase className="me-2 text-success" />
          Experience
        </h4>

        {/* Developer Block*/}
        <div className="mb-4">
          <h6 className="text-body-secondary"><strong>.NET Developer</strong></h6>
          <p className="text-muted">
            <FaCalendarAlt className="me-3 text-success"/>
            <span className="text-success">2024 - Present</span>
          </p>

          <p>Developed full-stack web applications using ASP.NET Core, React, PostgreSQL, and REST APIs, from database design to production deployment.</p>
          <p>Built solutions for the maritime and cargo inspection domain, including calculations, reporting, photo management, image processing, and data processing.</p>
          <p>Designed and developed REST APIs using ASP.NET Core Web API.</p>
          <p>Built full-stack web applications using ASP.NET Core MVC, ASP.NET Core Web API and React.</p>
          <p>Worked with Entity Framework Core, LINQ, Code-First and Migrations.</p>
          <p>Deployed and maintained applications on Ubuntu servers using Nginx, systemd and SSH.</p>
          <p>Used PostgreSQL, SQL Server and SQLite.</p>
          <p>Automated PostgreSQL backups to Hetzner Storage Box with 7-day backup retention.</p>
          <p>Developed background services for asynchronous image processing, file cleanup, and lazy deletion of files stored in S3-compatible object storage.</p>
          <p>Integrated S3-compatible object storage using pre-signed upload and download URLs.</p>          
          <p>Integrated external services and libraries including SendGrid for email confirmation, contact forms and feedback forms, QuestPDF for PDF report generation, ClosedXML for Excel report generation, ImageSharp for image processing, and MapTiler for interactive maps.</p>
          <p>Implemented authentication and authorization using ASP.NET Core Identity, JWT and Google OAuth.</p>
          <p>Used Docker and Docker Compose.</p>
          <p>Applied layered architecture, dependency injection, repository and service patterns.</p>
                      
        </div>        

        <hr />

        {/* Block 2 */}
        <div className="mt-4">
          <h6 className="text-body-secondary"><strong>Marine Surveyor</strong></h6>
          <p className="text-muted">
            <FaCalendarAlt className="me-3 text-success" />
            <span className="text-success">1995 - Present</span>
          </p>
          <p>
            Extensive experience in marine and cargo inspections. Details of previous professional background are provided below.
          </p>                              
          
        </div>

        <div>
          <div className='text-end'>
            <Button 
              variant='outline-success'
              onClick={() => setOpenDetails(prev => !prev)}
              aria-controls='marine-details-collapse'
              aria-expanded={openDetails}
              size='sm'
              style={{width: '100px'}}
            >
              {openDetails ? 'Hide details' : 'Show details'}
            </Button>
          </div>
          

          <Collapse in={openDetails}>
            <div id='marine-details-collapse' className='mt-3'>
              <p>
                Performed, organized and coordinated marine and cargo inspections in Ukraine, and various European and Asian ports.
              </p>

              <p>
                Conducted training sessions for seafarers at an international training center.
              </p>
              
              <hr/>
              <h6 className="text-body-secondary mb-3"><FaList className='me-2 text-success'/><strong>Experience</strong></h6>
              <ul className="list-unstyled mb-0 ps-0">
                <li>1995-2009 - UMCS - Surveyor</li>
                <li>2009-2018 - UMACS - Chief Surveyor</li>
                <li>2018-2019 - CIS - Surveyor, Coordinator</li>
                <li>2019-2020 - AmSpec - Surveyor</li>
                <li>2020-2021 - AmSpec - Chief Surveyor</li>
                <li>2021-2021 - DPS Marinex - Loss Adjuster</li>
                <li>2021-2022 - Dr. Buschmeyer - Surveyor</li>
                <li>2021-2024 - BST - Instructor</li>
                <li>2022-2024 - GSI - Surveyor, Coordinator</li>
                <li>2024-Present - Freelancer</li>
              </ul>

              <hr/>

              <h6 className="text-body-secondary mb-3"><FaList className='me-2 text-success'/><strong>Skills</strong></h6>              
              <p>Vegetable Oil Inspections (loading and discharging supervision & organization of sampling as per FOSFA).</p>
              <p>Grain Inspections (loading and discharging supervision & organization of sampling as per GAFTA).</p>
              <p>Mineral Cargoes Inspections (loading and discharging supervision, sampling, can tests).</p>
              <p>Bunker Survey (On-Hire / Off-Hire / bunker survey during bunkering operations).</p>
              <p>Ship's Condition Survey (On-Hire / Off-Hire / P&I / H&M / Pre-Purchase / Follow-Up).</p>
              <p>Holds and Tanks inspection (suitability before loading of the intended cargo).</p>
              <p>Draught Survey</p>
              <p>Hatch covers inspection (visual inspection and ultrasonic testing for watertightness).</p>
              <p>Damage Survey, investigations of maritime incidents (collisions, damage to shore facilities, oil spills, groundings, ballast water issues, etc.).</p>              
              <p>Perishable goods (bananas, fruits, frozen products, containers & warehouse inspections).</p>
              <p>Steel Products (steel pre-shipment inspections, loading & lashing supervision, tally count organization).</p>

              <hr/>

              <h6 className="text-body-secondary mb-3"><FaList className='me-2 text-success'/><strong>Trainings</strong></h6>
              <p>Conducted trainings for seafarers at an international training center, covering draught survey and bunker survey calculations.</p>                                    
            
            </div>          
          </Collapse>
        </div>

        {/* <Accordion className='mt-3'>
          <Accordion.Item eventKey='0'>            
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>            

              <p>
                Performed, organized and coordinated marine and cargo inspections in Ukraine, and various European and Asian ports.
              </p>

              <p>
                Conducted training sessions for seafarers at an international training center.
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
            
            </Accordion.Body>
          </Accordion.Item>          
        </Accordion> */}
      </Card.Body>
  </Card>
  </section>
  );  
};

ExperienceComponent.propTypes = {};

ExperienceComponent.defaultProps = {};

export default ExperienceComponent;
