import React from "react";
import propTypes from "prop-types";
import Card from "../Card/Card";
import AnimalDetails from "../AnimalDetails/AnimalDetails";

export default function AnotherAnimalCard({ name, size, ...props }) {
  return (
    <Card title="Animal" details={<AnimalDetails {...props} />}>
      <h2>{name}</h2>
      <h3>{size}kg</h3>
    </Card>
  );
}

AnotherAnimalCard.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
};
