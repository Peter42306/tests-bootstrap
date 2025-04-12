import React, { useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

const allProjects = [
  {
    title: 'Group Info and Something here in the Card Title',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample React Sample React app with music group information app with music group information Sample React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample Sample React app with music Sample Sample React app with music group information React app with music group information group Sample React app with music group information information React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample Sample React app with music Sample Sample React app with music group information React app with music group information group Sample React app with music group information information React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample Sample React app with music Sample Sample React app with music group information React app with music group information group Sample React app with music group information information React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample Sample React app with music Sample Sample React app with music group information React app with music group information group Sample React app with music group information information React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample Sample React app with music Sample Sample React app with music group information React app with music group information group Sample React app with music group information information React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample Sample React app with music Sample Sample React app with music group information React app with music group information group Sample React app with music group information information React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
  },
  {
    title: 'Group Info',
    images:[
      '/images/20241120_201928.jpg',
      '/images/20241121_162856.jpg',
      '/images/20241121_171915.jpg'
    ],
    description: 'Sample React app with music group information',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306'
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
    <h4>Razor Pages Projects</h4>
    <p>This section contains fullstack applications built with Razor Pages in ASP.NET Core.</p>       

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

ProjectAspRazorPages.propTypes = {};

ProjectAspRazorPages.defaultProps = {};

export default ProjectAspRazorPages;
