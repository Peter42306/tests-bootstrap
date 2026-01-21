import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Col, Form, Pagination, Row } from 'react-bootstrap';

const allProjects = [
  
  {
    title: 'Book Shop with Pagination and Order Form',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-205601.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-205811.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-205830.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-210045.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-210113.jpg`

    ],
    description: 'A simple React project simulating a book store. Includes paginated product cards, a dynamic order form and a modal order confirmation.',
    liveUrl: 'https://p.zalizko.site/react-projects/5-book-shop/',
    gitHubUrl: 'https://github.com/Peter42306/app-hw-2024-12-21-1325'
  },        
  {
    title: 'Photo Gallery',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-215307.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-215357.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-215414.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-215502.jpg`
      
    ],
    description: 'A simple React gallery project displaying travel photos using image carousels. Designed to practice working with image arrays, props, and layout components. Images rotate per city with minimal structure.',
    liveUrl: 'https://p.zalizko.site/react-projects/4-city-carousel/',
    gitHubUrl: 'https://github.com/Peter42306/app-hw-2024-12-21-1325'
  },
  {
    title: 'Music Band Brief Information',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-152306.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-152422.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-152441.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-152459.jpg`

    ],
    description: 'A simple React app showcasing a music band page, including member profiles and information about several albums. Built as a beginner React project to practice working with components and props.',
    liveUrl: 'https://p.zalizko.site/react-projects/1-music-group-info/',
    gitHubUrl: 'https://github.com/Peter42306/my-app-hw2'
  },  
  {
    title: 'City Info Cards with Image Carousel',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-214241.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-214310.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-214339.jpg`

    ],
    description: 'A React project displaying information cards for selected cities. Each card includes basic city facts and a carousel of images. The project demonstrates use of props, image carousels, and component reusability.',
    liveUrl: 'https://p.zalizko.site/react-projects/3-cities-carousels/',
    gitHubUrl: 'https://github.com/Peter42306/app-hw-2024-12-21-1325'
  },
  {
    title: 'Vessels Info App with React Router & Bootstrap',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-220945.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-221008.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-221032.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-221101.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-221125.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-26-221146.jpg`

    ],
    description: 'A React application with React Router. Each page displays main ship data. The app demonstrates nested routes, props, and reusable components.',
    liveUrl: 'https://p.zalizko.site/react-projects/6-navigation-vessels/#/',
    gitHubUrl: 'https://github.com/Peter42306/app-hw-navigation'
  },      
  {
    title: 'Validation Form Template',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-191404.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-191535.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-191732.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-191833.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-191934.jpg`

    ],
    description: 'A simple React form with real-time validation and visual feedback. The form supports dropdowns, radio buttons, checkboxes, and saves submitted data to a downloadable JSON file.',
    liveUrl: 'https://p.zalizko.site/react-projects/validation-form-template/',
    gitHubUrl: 'https://github.com/Peter42306/app-hw-2025-01-16-forms'
  },  
  {
    title: 'Simple Calculator with Fixed Values',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-193148.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-193225.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-05-27-193356.jpg`

    ],
    description: 'A minimalistic calculator built with React that takes a numeric input and computes fixed multipliers. Users can choose the number of decimal places and see a live history of calculations. Designed for practicing state management.',
    liveUrl: 'https://p.zalizko.site/react-projects/calculator-for-fixed-values/',
    gitHubUrl: 'https://github.com/Peter42306/app-hw-2025-01-16-forms'
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
    <h4>React Templates</h4>
    <p>Reference frontend templates built with React, without backend.</p>       

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
}


ProjectReact.propTypes = {};

ProjectReact.defaultProps = {};

export default ProjectReact;
