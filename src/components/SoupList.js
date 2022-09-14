import React from "react";
import Soup from "./Soup";
import PropTypes from "prop-types";


const SoupList = (props) => {
    return (
      <React.Fragment>
          {props.soupList.map((soup) => (
          <Soup 
          whenSoupClicked = { props.onSoupSelection }
          decrementStock = {props.onSellClick }
          name={soup.name}
          origin={soup.origin}
          price={soup.price}
          stock={soup.stock}
          description={soup.description}
          id={soup.id}
          key={soup.id}
          />
          ))}
      </React.Fragment>
    );
  };

  SoupList.propTypes = {
    soupList: PropTypes.array,
    onSellClick: PropTypes.func,
    onSoupSelection: PropTypes.func,
  };

export default SoupList;