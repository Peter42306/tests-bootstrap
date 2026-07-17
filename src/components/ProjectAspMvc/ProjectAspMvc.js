import React, { useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

const allProjects = [  
  
  // Template StudentsAdmin
  {
    title: 'Students & Admin, Auth, Image Upload, CRUD',
    images:[
      `${process.env.PUBLIC_URL}/images/StudentsAdmin-1.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsAdmin-2.jpg`,
      
    ],    
    description: 'Template ASP.NET Core MVC with ASP.NET Identity (register/login), admin-only CRUD for Students, image upload.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/StudentsAdmin'
  },  

  // Template StudentsAdminEditors
  {
    title: 'Students, Admin/Editors roles',
    images:[      
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195802.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195855.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195931.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_200145.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_195706.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot_2025-05-10_200249.jpg`
      
    ],
    description: 'Template with authentication, role-based access (Admin/User), admin panel, image upload and  (IImageService), Repository Pattern, AutoMapper, basic CRUD.',
    stack: [
      'ASP.NET Core MVC', 'Identity', 'EF Core', 'SQLite', 'AutoMapper', 'IRepository', 'IImageService', 'Bootstrap',
    ],    
    gitHubUrl: 'https://github.com/Peter42306/StudentsAdminEditors'
  },
  
  // Template SoccerPlayersTeamsLayered
  {
    title: 'Soccer Players & Teams, Layered Architecture',
    images:[
      `${process.env.PUBLIC_URL}/images/453625437-8676e467-d037-423b-ae38-423e9a939621.jpg`,
      `${process.env.PUBLIC_URL}/images/453625444-a292217f-d954-4c12-aee8-877a88d5d1cd.jpg`,
      `${process.env.PUBLIC_URL}/images/453625448-a4020730-ec65-49f7-a32d-0be0b8f99804.jpg`,
      `${process.env.PUBLIC_URL}/images/453625450-c864a4e0-2875-49aa-8be4-0562048c9800.jpg`,
      `${process.env.PUBLIC_URL}/images/453625454-e06be6e3-b71d-420d-9053-7b2292214324.jpg`,
      `${process.env.PUBLIC_URL}/images/453625458-1b67b875-97c3-460c-b29b-bb5a05ef3ed1.jpg`,
      
    ],    
    description: 'Template with layered architecture (UI, BLL, DAL) with CRUD and seeded demo data.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite', 'Bootstrap', 'Layered Architecture',
    ],
    gitHubUrl: 'https://github.com/Peter42306/SoccerPlayersTeamsLayered'
  },  

  // Template RazorPages.Repository
  {
    title: 'Students & Teachers, Repository Pattern',
    images:[
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-1.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-2.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-3.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-4.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-5.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-6.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-7.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-8.jpg`,
    ],    
    description: 'Template demonstrating ASP.NET Core Razor Pages with the Repository Pattern: interfaces, dependency injection, separate repositories for Student and Teacher, basic CRUD, and validation.',
    stack: [
      'ASP.NET Core Razor Pages', 'EF Core', 'SQL Server', 'Repository Pattern', 'Bootstrap',
    ],    
    gitHubUrl: 'https://github.com/Peter42306/RazorPages.Repository'
  },    

  // Template StudentsGroupsCollege
  {
    title: 'College Students & Groups, models relations',
    images:[
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-1.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-2.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-3.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-4.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-5.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-6.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-7.jpg`,
      `${process.env.PUBLIC_URL}/images/StudentsGroupsCollege-8.jpg`,
    ],    
    description: 'Template showing entities’ relations, one-to-many (College-Group, Group-Student) and many-to-many (Teacher-Subject) relation, basic CRUD, seeded demo data.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/StudentsGroupsCollege'
  },  
  
  // Template SoccerPlayersTeamsSortingFilteringPagination
  {
    title: 'Soccer Players & Teams, sorting, filtering, pagination',
    images:[
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSortingFilteringPagination-1.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSortingFilteringPagination-2.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSortingFilteringPagination-3.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSortingFilteringPagination-4.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSortingFilteringPagination-5.jpg`,
    ],    
    description: 'Template with teams and players sorting, filtering, and pagination, seeded demo data, basic CRUD.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite', 'Bootstrap',
    ],    
    gitHubUrl: 'https://github.com/Peter42306/SoccerPlayersTeamsSortingFilteringPagination'
  },  

  // Template SoccerFiltration
  {
    title: 'Soccer Players & Teams, filtering',
    images:[
      `${process.env.PUBLIC_URL}/images/SoccerFiltration-1.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerFiltration-2.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerFiltration-3.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerFiltration-4.jpg`,
    ],    
    description: 'Template for displaying teams and players with filtering by player and team fields, basic CRUD, seeded demo data.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/SoccerFiltration'
  },  

  // Template SoccerPlayersTeamsSorting
  {
    title: 'Soccer Players & Teams, sorting',
    images:[
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-1.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-2.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-3.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-4.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-5.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-6.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-7.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsSorting-8.jpg`,
    ],    
    description: 'Template for displaying teams and players with sorting options on player and team fields, basic CRUD, seeded demo data.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/SoccerPlayersTeamsSorting'
  },    

  // Template SoccerPlayersTeamsSortingFilteringPagination
  {
    title: 'Soccer Players & Teams, pagination',
    images:[
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsPagination-1.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsPagination-2.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsPagination-3.jpg`,
      `${process.env.PUBLIC_URL}/images/SoccerPlayersTeamsPagination-4.jpg`,      
    ],    
    description: 'Template app for viewing teams and players with simple pagination, seeded demo data, basic CRUD',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/SoccerPlayersTeamsPagination'
  },  

  // Template PhotoUploader
  {
    title: 'Photo Uploader',
    images:[
      `${process.env.PUBLIC_URL}/images/PhotoUploader.jpg`,
      
    ],    
    description: 'Template demonstrating file upload and storage in ASP.NET Core MVC. Allows uploading images and displaying them from the server.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/RazorPages.Repository'
  },  

  {
    title: 'Students CRUD + PostgreSQL',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221145.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221203.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221221.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-221243.jpg`
            
    ],
    description: 'Template with a basic CRUD and PostgreSQL. Testing PostgreSQL in a web environment.',
    liveUrl: 'https://2-students-postgre.p.zalizko.site/Students',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite · Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/StudentsPostgreSql'
  },  

  // Template Students CRUD + SQLite DB
  {
    title: 'Students CRUD + SQLite DB',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213359.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213413.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213432.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-06-08-213447.jpg`
            
    ],
    description: 'Template with a basic CRUD and SQLite database. Testing SQLite in a web environment.',
    liveUrl: 'https://1-students-sqlite.p.zalizko.site/Students',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQLite · Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/StudentsSqlite'
  },  

  // Template CarsCRUD + SQL Server
  {
    title: 'Cars CRUD + SQL Server',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-09-130823.jpg`,            
    ],    
    description: 'Template with a basic CRUD and MS SQL Server database.',
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/CarsCRUD'
  },  

  // Template Students CRUD + SQL Server
  {
    title: 'Students CRUD + SQL Server',
    images:[
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-09-133113.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-09-132957.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-09-133023.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-09-133040.jpg`,
      `${process.env.PUBLIC_URL}/images/Screenshot-2025-11-09-133056.jpg`,
    ],    
    description: 'Template with a basic CRUD and MS SQL Server database.',    
    stack: [
      'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap',
    ],
    gitHubUrl: 'https://github.com/Peter42306/StudentMvcCrud'
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
    <section id='projectsAspMvc' className='pt-2'>
    <h4>ASP.NET Core MVC Templates</h4>
    <p>Reference templates for ASP.NET Core MVC.</p>       

    {/* <Form.Select
      onChange={handleChange}
      value={itemsPerPage}
      className='w-auto mb-3'
      size='sm'
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
    )} */}
    
  </section>
  );
};

ProjectAspMvc.propTypes = {};

ProjectAspMvc.defaultProps = {};

export default ProjectAspMvc;
