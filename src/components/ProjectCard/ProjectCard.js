import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Carousel } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';


const ProjectCard = ({title, images, description, liveUrl, gitHubUrl }) => (
  <Card>
    {images?.length > 0 && (
      <Carousel interval={null} className='border-bottom'>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="d-block w-100"
              style={{objectFit: 'cover', maxHeight: '250px'}}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>      
    </Card.Body>
    <Card.Footer
      style={{
        backgroundColor:'transparent',
        borderTop:'none',
      }}
    >
      {liveUrl && (
        <Button
          variant='outline-success'
          href={liveUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='me-2'
        >
          View
        </Button>
      )}
      {gitHubUrl && (
        <Button
          variant='outline-secondary'
          href={gitHubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='me-2'
        >
          GitHub
        </Button>
      )}
      </Card.Footer>
  </Card>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  liveUrl: PropTypes.string,
  gitHubUrl:PropTypes.string,
};

ProjectCard.defaultProps = {
  images:[],
  liveUrl: null,
  gitHubUrl: null,
};

export default ProjectCard;
