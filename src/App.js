import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import { Col, Container, Row } from 'react-bootstrap';
import AboutComponent from './components/AboutComponent/AboutComponent';
import DetailsComponent from './components/DetailsComponent/DetailsComponent';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent/ExperienceComponent';
import EducationComponent from './components/EducationComponent/EducationComponent';
import LenguagesComponent from './components/LenguagesComponent/LenguagesComponent';
import ContactMeComponent from './components/ContactMeComponent/ContactMeComponent';
import ProjectReact from './components/ProjectReact/ProjectReact';
import ProjectTrips from './components/ProjectTrips/ProjectTrips';
import { useEffect, useState } from 'react';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import ProjectReactApi from './components/ProjectReactApi/ProjectReactApi';
import ProjectAspMvc from './components/ProjectAspMvc/ProjectAspMvc';
import ProjectAspRazorPages from './components/ProjectAspRazorPages/ProjectAspRazorPages';
import ProjectAspApi from './components/ProjectAspApi/ProjectAspApi';

function App() {
  const [isDark, setIsDark] = useState(false);

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
            <Col sm={4}>
              <DetailsComponent />
              <SkillsComponent />
              <LenguagesComponent />
            </Col>
            <Col sm={8}>
              <AboutComponent />
              <ExperienceComponent />
              <EducationComponent />
            </Col>
          </Row>

          <hr />
          <Row>
            <ProjectReact />
          </Row>

          <hr />
          <Row>
            <ProjectReactApi />
          </Row>

          <hr />
          <Row>
            <ProjectAspMvc />
          </Row>

          <hr />
          <Row>
            <ProjectAspRazorPages />
          </Row>

          <hr />
          <Row>
            <ProjectAspApi />
          </Row>

          <hr />
          <Row>
            <ProjectTrips />
          </Row>

          <hr />
          <Row>
            <ContactMeComponent />
          </Row>
      </Container> 

      <BackToTopButton/>      

      <FooterComponent />
    </>
  );
}

export default App;
