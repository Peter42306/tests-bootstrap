import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa6';


const NavbarComponent = ({ isDark, toggleTheme }) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Petr Zalizko Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">          

          <Link to="about" smooth={true} duration={500} className='nav-link' role='button'>About</Link>
          <Link to="skills" smooth={true} duration={500} className='nav-link' role='button'>Skills</Link>
          <Link to="experience" smooth={true} duration={500} className='nav-link' role='button'>Experience</Link>                    
          <Link to="education" smooth={true} duration={500} className='nav-link' role='button'>Education</Link>
          <Link to="projectsAspRazor" smooth={true} duration={500} className='nav-link' role='button'>Projects</Link>
          <Link to="projectsHtml" smooth={true} duration={500} className='nav-link' role='button'>Static Websites</Link>
          <Link to="otherTemplates" smooth={true} duration={500} className='nav-link' role='button'>Templates</Link>

          {/* <NavDropdown title="Templates" id="projects-dropdown">
            
            <NavDropdown.Item as='span'>
              <Link to="projectsReact" smooth={true} duration={500} className='nav-link' role='button'>React</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as='span'>
              <Link to="projectsAspMvc" smooth={true} duration={500} className='nav-link' role='button'>ASP.NET Core MVC</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as='span'>
              <Link to="projectsAspApi" smooth={true} duration={500} className='nav-link' role='button'>ASP.NET Core Web API</Link>
            </NavDropdown.Item>
            <NavDropdown.Item as='span'>
              <Link to="projectsHtml" smooth={true} duration={500} className='nav-link' role='button'>Html</Link>
            </NavDropdown.Item>           

          </NavDropdown> */}

          <Link to="contact" smooth={true} duration={500} className='nav-link' role='button'>Contact</Link>
                    
        </Nav>        

        <div
          onClick={toggleTheme}            
          style={{
            cursor: 'pointer',
            fontSize: '1.5rem',
            marginLeft: 'auto'
          }}
          title={isDark ? 'Light Mode' : 'Dark Mode'}
          >
            {isDark ? <FaSun/> : <FaMoon/>}
      </div>
        
        
      </Navbar.Collapse>

      

    </Container>
  </Navbar>
);

NavbarComponent.propTypes = {};

NavbarComponent.defaultProps = {};

export default NavbarComponent;
