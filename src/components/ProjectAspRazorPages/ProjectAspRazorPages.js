import React, { useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

const allProjects = [
  {
    title: 'Draught Survey Web App',
    images:[
      `${process.env.PUBLIC_URL}/images/Thumbnail_Draught_Survey_Web_App_20250316_111106_resized.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_213826.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_213946.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214001.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214021.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214036.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214116.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214137.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214155.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214213.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214244.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214306.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214324.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214334.jpg`,      
    ],
    description: 'Application for ship officers and marine surveyors to perform draught survey calculation (cargo quantity on board). Main vessel information and hydrostatic tables are kept in the database, automatically autofill and recalculate, export of Excel report.',
    stack: 'ASP.NET Core MVC · ASP.NET Identity · EF Core · PostgreSQL · ClosedXML · SendGrid · Bootstrap · Hetzner VPS',
    liveUrl: 'https://draught-survey.p.zalizko.site/',
    gitHubUrl: 'https://github.com/Peter42306/DraughtSurveyWebApp',
    youTubeUrl: 'https://youtu.be/w-mKc8zRkAc'
  },  
  {
    title: 'Trucks Weighing Web App',
    images:[
      `${process.env.PUBLIC_URL}/images/20250219_170035.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_213755.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_214007.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_214257.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_215123.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_215331.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_215628.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_215640.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_215755.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_220201.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_220202.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_221156.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_221847.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_222028.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_222029.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_222124.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_222316.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-10-14_222447.jpg`,      
      
    ],
    description: 'Application for for weight control inspections with initial and final truck weighing, built for cargo surveyors and tally teams. Autocomplete of trucks plate number input, two control points, trucks status, convenient for teamwork, logo upload, export of PDF report.',
    stack: 'ASP.NET Core MVC · ASP.NET Identity · EF Core · PostgreSQL · QuestPDF · SendGrid · Bootstrap · Hetzner VPS',
    liveUrl: 'https://trucks.p.zalizko.site/',
    gitHubUrl: 'https://github.com/Peter42306/TrucksWeighingWebApp',
    youTubeUrl: 'https://youtu.be/4bdfnxBKocM'
  },  
  {
    title: 'Photo Lab Web App',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-03 212803-thumbnail.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-125834.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-125854.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-125931.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130048.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130129.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130215.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130325.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130345.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130422.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130445.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130559.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130625.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-130700.jpg`,
      
    ],
    description: 'Application for organizing and processing  photo sets. Extracts geo data, displays photos on an interactive map, builds routes based on timestamps, calculates distances between points, and generates PDF reports with customizable title and description.',
    stack: 'ASP.NET Core MVC · SixLabors.ImageSharp · MetadataExtractor · Bootstrap',    
    gitHubUrl: 'https://github.com/Peter42306/PhotoLabWebApp',
    youTubeUrl: 'https://youtu.be/kZUVSQp2xVA'
  },  
  {
    title: 'Portfolio Website',
    images:[      
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-115406.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-115419.jpg`,            
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-115437.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-115451.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-06-115502.jpg`,
            
    ],
    description: 'This website itself - a personal portfolio built as a single-page React application. Includes smooth section navigation, light/dark theme toggle, and a contact form sending messages through an ASP.NET Core API.',
    stack: 'React SPA · React-Bootstrap · Contact Form via ASP.NET Core API (SendGrid email service) · Hetzner VPS',
    liveUrl: 'https://p.zalizko.site/react-projects/portfolio/',
    gitHubUrl: 'https://github.com/Peter42306/tests-bootstrap'    
  },  
];

const ProjectAspRazorPages = () => {
  const getDefaultItemsPerPage = () => {
          if (window.innerWidth < 576) return 1; // mobile
          return 3; // monitor
        }
        const [itemsPerPage, setItemsPerPage] = useState(getDefaultItemsPerPage);
        const [currentPage, setCurrentPage] = useState(1);
      
        const handleChange = (e) => {
          setItemsPerPage(Number(e.target.value));
          setCurrentPage(1);
        };
      
        const indexOfLast = currentPage * itemsPerPage;
        const indexOfFirst = indexOfLast - itemsPerPage;
        const currentItems = allProjects.slice(indexOfFirst, indexOfLast);
        const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  return(
    <section id='projectsAspRazor' className='mt-3'>
    <h4>Projects</h4>
    <p>Projects solving real tasks, deployed and available online.</p>

    <Form.Select
      onChange={handleChange}
      value={itemsPerPage}
      className='w-auto mb-3'
      size='sm'
    >
      <option value={1}>Show 1 project</option>
      <option value={3}>Show 3 projects</option>
      <option value={6}>Show 6 projects</option>
      <option value={allProjects.length}>Show all projects</option>
    </Form.Select>

    <Row>
      {currentItems.map((project, idx) => (
        <Col xs={12} md={4} className="d-flex" key={idx}>
          <ProjectCard {...project}/>
        </Col>
      ))}
    </Row>

    {totalPages > 1 && (
      <Pagination className='mt-2 justify-content-center' size='sm'>
        {[...Array(totalPages)].map((_,i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )}
    
  </section>
  );
};

ProjectAspRazorPages.propTypes = {};

ProjectAspRazorPages.defaultProps = {};

export default ProjectAspRazorPages;
