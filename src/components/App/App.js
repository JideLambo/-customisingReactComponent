// import AnimalCard from "../AnimalCard/AnimalCard.js";
import React from "react";
import { createUseStyles } from "react-jss";
import AnotherAnimalCard from "../AnotherAnimalCard/AnotherAnimalCard";
import data from "./data";
import "./App.css";
import Alert from "../Alert/Alert";
import CartSuccess from "../CartSuccess/CartSuccess";
import Product from "../Product/Product";

// function showAdditional(additional) {
//   const alertInformation = Object.entries(additional)
//     .map((information) => `${information[0]}: ${information[1]}`)
//     .join("\n");
//   alert(alertInformation);
// }

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <div className="wrapper">
        {data.map((animal) => (
          <AnotherAnimalCard
            key={animal.name}
            diet={animal.diet}
            name={animal.name}
            size={animal.size}
            scientificName={animal.scientificName}
          />
        ))}
      </div>

      <div className={classes.wrapper}>
        <Alert title="Items Not Added" type="error">
          <div>Your items are out of stock.</div>
        </Alert>
        <CartSuccess />
      </div>

      <Product />
    </>
  );
}

export default App;
