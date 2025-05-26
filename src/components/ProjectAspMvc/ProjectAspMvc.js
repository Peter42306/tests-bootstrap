import React, { useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

const allProjects = [
  {
    title: 'Students/Admin/Users Template',
    images:[
      '/images/Screenshot_2025-05-10_195706.jpg',
      '/images/Screenshot_2025-05-10_195802.jpg',
      '/images/Screenshot_2025-05-10_195855.jpg',
      '/images/Screenshot_2025-05-10_195931.jpg',
      '/images/Screenshot_2025-05-10_200145.jpg',
      '/images/Screenshot_2025-05-10_200249.jpg'      
    ],
    description: 'Template with authentication, role-based access (Admin/User), entity CRUD (Student),  view models, image upload (IImageService), clean architecture (IRepository, AutoMapper), and SQLite database.',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306/StudentsAdminEditors.git'
  },
  {
    title: 'Title for empty card',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Here should be description for empty card',
    liveUrl: 'https://github.com/Peter42306/',
    gitHubUrl: 'https://github.com/Peter42306/'
  },  
];

const ProjectAspMvc = () => {
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
    <section id='projectsAspMvc' className='mt-3'>
    <h4>ASP.NET Core MVC Projects</h4>
    <p>This section contains fullstack applications built with ASP.NET Core MVC.</p>       

    <Form.Select
      onChange={handleChange}
      value={itemsPerPage}
      className='w-auto mb-3'
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
    )}
    
  </section>
  );
};

ProjectAspMvc.propTypes = {};

ProjectAspMvc.defaultProps = {};

export default ProjectAspMvc;
