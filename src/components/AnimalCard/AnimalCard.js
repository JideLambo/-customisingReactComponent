import React from "react";
import PropTypes from "prop-types";
import "./AnimalCard.css";

export default function AnimalCard({
  additional,
  diet,
  oruko,
  scientificName,
  showAdditional,
  size,
}) {
  return (
    <div className="animal-wrapper">
      <h2>{oruko}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}kg</h4>
      <div>{diet.join(", ")}.</div>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  oruko: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    links: "No Additional information",
    notes: "No Additional information",
  },
};
