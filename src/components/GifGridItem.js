import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounce">
      <img key={id} src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default GifGridItem;
