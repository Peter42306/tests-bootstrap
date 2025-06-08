import React, { useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

const allProjects = [  
  {
    title: 'Template Students CRUD, roles Admin/Editors',
    images:[      
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195802.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195855.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195931.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_200145.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195706.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_200249.jpg`
      

      // '/images/Screenshot_2025-05-10_195706.jpg',
      // '/images/Screenshot_2025-05-10_195802.jpg',
      // '/images/Screenshot_2025-05-10_195855.jpg',
      // '/images/Screenshot_2025-05-10_195931.jpg',
      // '/images/Screenshot_2025-05-10_200145.jpg',
      // '/images/Screenshot_2025-05-10_200249.jpg'      
    ],
    description: 'Template with authentication, role-based access (Admin/User), admin panel, entity CRUD (Student),  view models, image upload (IImageService), clean architecture (IRepository, AutoMapper), and SQLite database.',
    liveUrl: 'http://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306/StudentsAdminEditors.git'
  },
  {
    title: 'Template Students CRUD + PostgreSQL',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221145.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221203.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221221.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221243.jpg`
      
      
      // '/images/Screenshot-2025-06-08-221145.jpg',
      // '/images/Screenshot-2025-06-08-221203.jpg',
      // '/images/Screenshot-2025-06-08-221221.jpg',
      // '/images/Screenshot-2025-06-08-221243.jpg',      
    ],
    description: 'Template with a basic CRUD and PostgreSQL. Testing PostgreSQL in a web environment.',
    liveUrl: 'https://2-students-postgre.p.zalizko.site/Students',
    gitHubUrl: 'https://github.com/Peter42306/StudentsPostgreSql'
  },
  {
    title: 'Template Students CRUD + SQLite DB',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213359.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213413.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213432.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213447.jpg`
      
      
      // '/images/Screenshot-2025-06-08-213359.jpg',
      // '/images/Screenshot-2025-06-08-213413.jpg',
      // '/images/Screenshot-2025-06-08-213432.jpg',
      // '/images/Screenshot-2025-06-08-213447.jpg',      
    ],
    description: 'Template with a basic CRUD and SQLite database. Testing SQLite in a web environment.',
    liveUrl: 'https://1-students-sqlite.p.zalizko.site/Students',
    gitHubUrl: 'https://github.com/Peter42306/StudentsSqlite'
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
