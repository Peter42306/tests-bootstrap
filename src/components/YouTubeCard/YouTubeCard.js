import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const YouTubeCard = ({ title, videoUrl, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      {/* YouTube video */}
      <div className="ratio ratio-16x9">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-top"
        ></iframe>
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text className={!expanded ? "card-text-truncate" : ""}>
          {description}
        </Card.Text>

        {description.length > 100 && (
          <Button
            variant="link"
            className="p-0 text-success"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

YouTubeCard.propTypes = {
  title: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

YouTubeCard.defaultProps = {};

export default YouTubeCard;
