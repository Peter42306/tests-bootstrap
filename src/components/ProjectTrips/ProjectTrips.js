import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Form, Pagination, Row } from "react-bootstrap";
import YouTubeCard from "../YouTubeCard/YouTubeCard";

const allProjects = [
  {
    title: "Dordrecht, the Netherlands | A Walking Tour | Slideshow 4K",
    videoUrl: "https://www.youtube.com/embed/sBvehz1zdqM",
    description: "A walking tour through the charming city of Dordrecht , the Netherlands, presented in the form of a 4K photo slideshow. Quiet canals, boats gently moored beside parked cars, and a deep sense of care in every detail of each home.",
  },
  {
    title: "Rotterdam, the Netherlands | A Walking Tour | Slideshow 4K",
    videoUrl: "https://www.youtube.com/embed/COsrQyXmd64",
    description: "A photo slideshow of a walking tour through Rotterdam, the Netherlands, in 4K. Explore the modern architecture, charming harbors, and vibrant streets of one of the most dynamic cities in Europe. From the Cube Houses and Erasmus Bridge to hidden corners and peaceful canals — discover Rotterdam’s unique atmosphere through photography.",
  },
  {
    title: "Antwerp, Belgium | A Walking Tour | Slideshow 4K",
    videoUrl: "https://www.youtube.com/embed/SLybumx4nRA",
    description: "A walking tour through the beautiful city of Antwerp, Belgium, presented in the form of a 4K photo slideshow. Discover the charm of its historic streets and iconic landmarks.",
  },
  {
    title: "Brussels, Belgium | A Walking Tour | Slideshow 4K",
    videoUrl: "https://www.youtube.com/embed/_O9Fsnle4cU",
    description: "A walking tour through the beautiful city of Brussels, Belgium, presented in the form of a 4K photo slideshow. Discover the charm of its historic streets and iconic landmarks.",
  },

  {
    title: "Ghent, Belgium | A Walking Tour | Slideshow 4K",
    videoUrl: "https://www.youtube.com/embed/DbXGGh4xbg0",
    description: "A walking tour through the beautiful city of Ghent, Belgium, presented in the form of a 4K photo slideshow. Discover the charm of its historic streets, canals, and iconic landmarks.",
  },
  {
    title: "Sas van Gent, the Netherlands | A Walking Tour | Slideshow 4K",
    videoUrl: "https://www.youtube.com/embed/b1KIuhg7POg",
    description: "A walking tour through the charming Dutch town of Sas van Gent, presented in the form of a 4K photo slideshow. Explore its peaceful streets, canals, and local atmosphere",
  },
];

const ProjectTrips = () => {
  const getDefaultItemsPerPage = () => {
    if (window.innerWidth < 576) return 1; // mobile
    return 3; // monitor
  };
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
    <section id="projectsTrips" className="mt-3">
      <h4>Trips</h4>
      <p>This section contains videos made from photos I took during my trips, presented as slideshows.</p>

      <Form.Select
        onChange={handleChange}
        value={itemsPerPage}
        className="w-auto mb-3"
      >
        <option value={1}>Show 1 project</option>
        <option value={3}>Show 3 projects</option>
        <option value={6}>Show 6 projects</option>
        <option value={allProjects.length}>Show all projects</option>
      </Form.Select>

      <Row>
        {currentItems.map((project, idx) => (
          <Col xs={12} md={4} className="d-flex" key={idx}>
            <YouTubeCard {...project} />
          </Col>
        ))}
      </Row>

      {totalPages > 1 && (
        <Pagination className="mt-2 justify-content-center">
          {[...Array(totalPages)].map((_, i) => (
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

ProjectTrips.propTypes = {};

ProjectTrips.defaultProps = {};

export default ProjectTrips;
