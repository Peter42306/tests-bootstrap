import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap';
import AboutComponent from './components/AboutComponent/AboutComponent';
import DetailsComponent from './components/DetailsComponent/DetailsComponent';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent/ExperienceComponent';
import EducationComponent from './components/EducationComponent/EducationComponent';
import LenguagesComponent from './components/LenguagesComponent/LenguagesComponent';
import ContactMeComponent from './components/ContactMeComponent/ContactMeComponent';
import ProjectReact from './components/ProjectReact/ProjectReact';
//import ProjectTrips from './components/ProjectTrips/ProjectTrips';
import { useEffect, useState } from 'react';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import ProjectReactApi from './components/ProjectReactApi/ProjectReactApi';
import ProjectAspMvc from './components/ProjectAspMvc/ProjectAspMvc';
import ProjectAspRazorPages from './components/ProjectAspRazorPages/ProjectAspRazorPages';
import ProjectAspApi from './components/ProjectAspApi/ProjectAspApi';
import ProjectHtml from './components/ProjectHtml/ProjectHtml';
import MainProjectCard from './components/MainProjectCard/MainProjectCard';
import MainProjectsSection from './components/MainProjectsSection';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      isDark ? 'dark' : 'light',
    );
  }, [isDark]);

  return (
    <>
      <NavbarComponent isDark={isDark} toggleTheme={toggleTheme} />      

      <Container>
          <Row>
            <Col xs={12} md={6} xl={4}>
              <DetailsComponent />
              <SkillsComponent />
              <LenguagesComponent />
            </Col>
            <Col xs={12} md={6} xl={8}>
              <AboutComponent />
              <ExperienceComponent />
              <EducationComponent />
            </Col>
          </Row>

          {/* <hr/> */}

          
          {/* <MainProjectsSection/> */}
          

          {/* <hr /> */}

          {/* <Row>
            <MainProjectCard/>
          </Row> */}
          
          <hr />

          {/* Main projects, ignore component name */}          
          <ProjectAspRazorPages />                    

          <hr />

          <ProjectHtml/>

          <hr/>



          <Row id='otherTemplates'>
            <div className='d-flex flex-column flex-md-row align-items-center justify-content-between mt-2 mb-2'>
              <div>
                <h4>Other Templates for Reference</h4>
                <p className='mb-2 mb-md-0'>
                  Reference templates for ASP.NET Core MVC, ASP.NET Core Web API, React without backend, and static HTML.
                </p>
              </div>
              
              <div className='mt-2 mt-md-0'>
                <Button
                  variant='outline-success'
                  size='sm'
                  onClick={() => setShowTemplates(prev => !prev)}
                  aria-controls='template-demo-details'
                  aria-expanded={showTemplates}
                  style={{width: '100px'}}                  
                >
                  {showTemplates ? 'Hide' : 'Show'}
                </Button>
              </div>
            </div>
          </Row>

          <hr />

          <Collapse in={showTemplates}>
            <div id='template-demo-details' className='mt-3'>                                                 
              

              {/* Full-stack Templates, Docker */}          
              <ProjectReactApi />          
              
              

              <hr/>
              
              <ProjectAspMvc />              

              <hr />
              
              <ProjectAspApi />              

              <hr/>

              
              <ProjectReact />
              

              <hr />              

            </div>            
          </Collapse>                     
          
          <ContactMeComponent />
            
      </Container> 
      
      <BackToTopButton/>      

      <FooterComponent />
    </>
  );
}

export default App;
