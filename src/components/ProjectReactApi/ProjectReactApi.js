import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

const allProjects = [
  {
    title: 'Comments SPA',
    images:[
      `${process.env.PUBLIC_URL}/images/CommentsSPA_Screenshot_2026-01-21_120209_1.jpg`,
      `${process.env.PUBLIC_URL}/images/CommentsSPA_Screenshot_2026-01-21_120240_2.jpg`,
      `${process.env.PUBLIC_URL}/images/CommentsSPA_Screenshot_2026-01-21_120254_3.jpg`,      
    ],
    description: 'Full-stack comments with nested replies, file uploads, and CAPTCHA protection (ASP.NET Core, React, PostgreSQL, Docker).',
    stack: [
      'ASP.NET Core Web API · EF Core · PostgreSQL · React · Docker · Bootstrap · Hetzner VPS',
    ],
    liveUrl: 'https://comments-spa.p.zalizko.site/',
    gitHubUrl: 'https://github.com/Peter42306/CommentsSPA'
  },  
  {
    title: 'Students',
    images:[
      `${process.env.PUBLIC_URL}/images/students-fullsttack_Screenshot_2026-01-20_105605-1.jpg`,
      `${process.env.PUBLIC_URL}/images/students-fullsttack_Screenshot_2026-01-20_110908-2.jpg`,
      `${process.env.PUBLIC_URL}/images/students-fullsttack_Screenshot_2026-01-20_110945-3.jpg`,      
    ],
    description: 'Full-stack CRUD template with file uploads: ASP.NET Core Web API + PostgreSQL (Docker) + React (Vite).',
    stack: ['ASP.NET Core Web API · EF Core · PostgreSQL · React · Docker · Bootstrap · Hetzner VPS',

    ],
    liveUrl: 'https://students.p.zalizko.site/students',
    gitHubUrl: 'https://github.com/Peter42306/students-fullstack'
  },  
];

const ProjectReactApi = () => {
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
    <section id='projectsReactApi' className='pt-2'>
    <h4>Full-Stack Templates</h4>
    <p>Dockerized full-stack templates: ASP.NET Core Web API + React + PostgreSQL.</p>       

    {/* <Form.Select
      onChange={handleChange}
      value={itemsPerPage}
      className='w-auto mb-3'
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
      <Pagination className='mt-2 justify-content-center'>
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

ProjectReactApi.propTypes = {};

ProjectReactApi.defaultProps = {};

export default ProjectReactApi;
