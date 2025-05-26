import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Col, Form, Pagination, Row } from 'react-bootstrap';

const allProjects = [
  {
    title: 'Misic Group Brief Information',
    images:[
      '/images/Screenshot-2025-05-26-152306.jpg',
      '/images/Screenshot-2025-05-26-152422.jpg',
      '/images/Screenshot-2025-05-26-152441.jpg',
      '/images/Screenshot-2025-05-26-152459.jpg'
    ],
    description: 'A simple React app showcasing a music band page with members details and details of several albums. One of my first learning projects.',
    liveUrl: 'https://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306/my-app-hw2'
  },  
  {
    title: 'Empty card',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Here should be description for empty card.',
    liveUrl: 'https://github.com/Peter42306',
    gitHubUrl: 'https://github.com/Peter42306'
  },
];

const ProjectReact = () => {
  //const [itemsPerPage, setItemsPerPage] = useState(3);

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

  return (  

  <section id='projectsReact' className='mt-3'>
    <h4>React Projects</h4>
    <p>At this section are shown frontend projects, without backend</p>       

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
}


ProjectReact.propTypes = {};

ProjectReact.defaultProps = {};

export default ProjectReact;
