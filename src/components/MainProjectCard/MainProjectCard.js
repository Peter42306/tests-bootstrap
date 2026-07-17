import { useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";

const MainProjectCard = ({
    title,
    subtitle,
    images,
    description,
    features,
    stack,
    architecture,
    details,
    administration,
    liveUrl,
    gitHubUrl,
    youTubeUrl,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const handleImageClick = (index) => {
        setStartIndex(index);
        setShowModal(true);
    }
    return(
        <Card className="shadow-sm">

            <Row>
                <Col sm={12} md={6} lg={4}>
                {images?.length > 0 && (
                    <div className='ratio ratio-16x9 border-bottom'>
                        <Carousel 
                            interval={null} 
                            touch={true}
                            className='h-100'                        
                            indicators={images.length > 1}
                            controls={images.length > 1}
                        >
                            {images.map((img, index) => (
                                <Carousel.Item key={img}>
                                    <img
                                        src={img}
                                        alt={`${title} ${index + 1}`}
                                        className="d-block w-100 h-100"
                                        style={{objectFit: 'cover', cursor: 'pointer'}}
                                        onClick={() => handleImageClick(index)}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>                
                )}
                <Card.Title className="mt-3">{title}</Card.Title>
                {/* {subtitle && (
                        <Card.Subtitle>{subtitle}</Card.Subtitle>
                    )} */}
                    {description && (
                        <Card.Text>{description}</Card.Text>
                    )}

                </Col>
                <Col sm={12} md={6} lg={8}>
                <Card.Body className="px-0">
                    {/* <Card.Title>{title}</Card.Title>

                    {subtitle && (
                        <Card.Subtitle>{subtitle}</Card.Subtitle>
                    )} */}

                    {/* {description && (
                        <Card.Text>{description}</Card.Text>
                    )} */}

                    {features && (
                        <Card.Text>Features:<br/>{features.join(" \u2022 ")}</Card.Text>
                    )}

                    {stack && (
                        <Card.Text>Technology Stack: <br/>{stack.join(" \u2022 ")}</Card.Text>
                    )}

                    {architecture && (
                        <Card.Text>{architecture}</Card.Text>
                    )}

                    {administration && (
                        <Card.Text>Administration:<br/>{administration}</Card.Text>
                    )}

                    <Card.Text className="text-center">
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
                                <FaLink className='me-1'/>Link
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
                                <FaGithub className='me-2'/>GitHub
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
                                <FaYoutube className='me-2'/>YouTube
                            </Button>
                        )}
                    </Card.Text>


                </Card.Body>            
                </Col>
            </Row>

            
            

            {/* <Card.Footer
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
                        <FaLink className='me-1'/>Link
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
                        <FaGithub className='me-2'/>GitHub
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
                        <FaYoutube className='me-2'/>YouTube
                    </Button>
                )}
            </Card.Footer> */}
        </Card>
    );    
}

export default MainProjectCard;