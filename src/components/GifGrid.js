import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGreed = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate_animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate_animated animate__flash">Loading...</p>}
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};

GifGreed.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGreed;
