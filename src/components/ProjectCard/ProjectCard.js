import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Carousel, Modal } from 'react-bootstrap';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub, FaLink } from 'react-icons/fa6';


const ProjectCard = ({
  title, 
  images, 
  description, 
  stack, 
  liveUrl, 
  gitHubUrl,   
  youTubeUrl }) => {
  const[showModal, setShowModal] = useState(false);
  const[startIndex, setStartIndex] = useState(0);

  const handleImageClick = (index) => {
    setStartIndex(index);
    setShowModal(true);
  }
  
  return (
  <Card>
    {images?.length > 0 && (
      <div className='ratio ratio-16x9 border-bottom'>
        <Carousel interval={null} className='h-100'>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="d-block w-100"
              style={{objectFit: 'cover', maxHeight: '250px', cursor: 'pointer'}}
              onClick={() => handleImageClick(index)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      
    )}
    <Card.Body className='px-0'>
      {title && (
        <Card.Title>{title}</Card.Title>
      )}
      {description && (
        <Card.Text>{description}</Card.Text>      
      )}
      {stack && (
        <Card.Text className='text-muted' style={{fontSize:'0.9rem'}}>{stack.join(" \u2022 ")}</Card.Text>      
      )}            
      
    </Card.Body>
    <Card.Footer
      style={{
        backgroundColor:'transparent',
        borderTop:'none',
      }}
      className='px-0 text-center'
    >
      {liveUrl && (
        <Button
          variant='outline-success'
          href={liveUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='me-1 mb-1'
          size='sm'
          style={{width: '94px'}}
        >
          <FaLink className='me-1'/>
          Link
        </Button>
      )}
      {gitHubUrl && (
        <Button
          variant='outline-secondary'
          href={gitHubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='me-1 mb-1'
          size='sm'
          style={{width: '94px'}}
        >
          <FaGithub className='me-2'/>
          GitHub
        </Button>
      )}      
      {youTubeUrl && (
        <Button
          variant='outline-danger'
          href={youTubeUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='me-1 mb-1'
          size='sm'
          style={{width: '95px'}}
        >
          <FaYoutube className='me-2'/>
          YouTube
        </Button>
      )}
      </Card.Footer>

{/* Fullscreen gallery modal with carousel */}
<Modal 
  show={showModal} 
  onHide={() => setShowModal(false)} 
  centered 
  //fullscreen
  size='xl'
  >
  <Modal.Body className='p-0'>
    <div className='ratio ratio-16x9 border-bottom'>      
      <Carousel 
        interval={null}
        defaultActiveIndex={startIndex} 
        className='h-100'
        controls={images?.length > 1}
        indicators={images?.length > 1}
      >
      {images?.map((img, i)=>(
        <Carousel.Item key={i}>
          <img
            src={img}
            alt={`${title} full view ${i + 1}`}
            className='d-block w-100'
            style={{ maxHeight: '90vh', objectFit: 'contain'}}
          />
        </Carousel.Item>
      ))}
      </Carousel>
    </div>
    
  </Modal.Body>
</Modal>

  </Card>
);
}
  
  
  

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveUrl: PropTypes.string,
  gitHubUrl: PropTypes.string,
  youTubeUrl: PropTypes.string,
};

ProjectCard.defaultProps = {
  images:[],
  stack: [],
  liveUrl: null,
  gitHubUrl: null,
  youTubeUrl: null,
};

export default ProjectCard;
