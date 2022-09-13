import React from "react";
import PropTypes from "prop-types";


function Soup(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSoupClicked(props.id)}>
        <h3>Name: {props.name} - ${props.price}</h3>
        <h5>From: {props.origin}</h5>
        <h5>Description: {props.description}</h5>
        <h5>Stock: {props.stock} </h5>
        <button 
          onClick={() => props.decrementStock(props.id)}>Sell Soup
        </button>
      </div>
    </React.Fragment>
  );
}

Soup.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenSoupClicked: PropTypes.func,
  decrementStock: PropTypes.func
};

export default Soup;