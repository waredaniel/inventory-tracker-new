import React from "react";
import PropTypes from "prop-types";

function SoupDetail(props){

  const { soup, onClickingDelete, } = props;
  return (
    <React.Fragment>
    <h1>Soup Detail</h1>
    <h3>Name: {soup.name} - ${soup.price}</h3>
    <p>From: {soup.origin}</p>
    <p>Description: {soup.description}</p>
    <p>{soup.stock} Servings Remaining</p>
    <button onClick={() => onClickingDelete(soup.id) }>Delete Soup</button>
    <hr/>
    </React.Fragment>
  );
}

SoupDetail.propTypes = {
  soup: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default SoupDetail;