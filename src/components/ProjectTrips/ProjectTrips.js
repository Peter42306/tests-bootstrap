import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Form, Pagination, Row } from "react-bootstrap";
import YouTubeCard from "../YouTubeCard/YouTubeCard";

const allProjects = [
  {
    title: "Group Info and Something here in the Card Title",
    videoUrl: "https://www.youtube.com/embed/Uf234e_9bmU",
    description: "Sample React app with music group information",
  },
  {
    title: "Group Info and Something here in the Card Title",
    videoUrl: "https://www.youtube.com/embed/Uf234e_9bmU",
    description: "Sample React app with music group information",
  },
  {
    title: "Group Info and Something here in the Card Title",
    videoUrl: "https://www.youtube.com/embed/Uf234e_9bmU",
    description: "Sample React app with music group information",
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
