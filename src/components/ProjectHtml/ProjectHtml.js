import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Col, Form, Pagination, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";

const allProjects = [
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
    stack: [
      'React SPA', 'React-Bootstrap', 'Contact Form via ASP.NET Core API (SendGrid email service)', 'Hetzner VPS',
    ],
    liveUrl: 'https://p.zalizko.site/react-projects/portfolio/',
    gitHubUrl: 'https://github.com/Peter42306/tests-bootstrap'    
  },  
    {
    title: 'Personal CV',
    images:[      
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-10-123046.jpg`,      
    ],
    description: 'Personal CV site, based on a W3Schools template. Responsive design, deployed.',
    liveUrl: 'https://p.zalizko.site/resume/developer/',
    stack: [
      'HTML', 'CSS', 'Bootstrap', 'Hetzner VPS',
    ],
    gitHubUrl: 'https://github.com/Peter42306/my-cv-dev-html'
  },  
];

const ProjectHtml = () => {
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

    <section id='projectsHtml' className='pt-2'>
    <h4>Static Websites</h4>
    <p>Responsive websites built with HTML, CSS, Bootstrap, W3.CSS, and React.</p>             
             

    {/* <Form.Select
      onChange={handleChange}
      value={itemsPerPage}
      className='w-auto mb-3'
      size="sm"
    >
      <option value={1}>Show 1 project</option>
      <option value={3}>Show 3 projects</option>
      <option value={6}>Show 6 projects</option>
      <option value={allProjects.length}>Show all projects</option>
    </Form.Select> */}

    <Row>
      {allProjects.map((project, idx) => (
        <Col xs={12} md={6} xl={4} className="d-flex" key={project.title}>
          <ProjectCard {...project}/>
        </Col>
      ))}
    </Row>
    {/* <Row>
      {currentItems.map((project, idx) => (
        <Col xs={12} md={4} className="d-flex" key={idx}>
          <ProjectCard {...project}/>
        </Col>
      ))}
    </Row> */}

    {/* {totalPages > 1 && (
      <Pagination className='mt-2 justify-content-center' size="sm">
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
    )} */}
    
  </section>        
    );
};

ProjectHtml.propTypes = {};

ProjectHtml.defaultProp = {};

export default ProjectHtml;