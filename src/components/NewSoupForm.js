import React from "react";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function NewSoupForm(props){

function handleNewSoupFormSubmission(event) {
    event.preventDefault();
    props.onNewSoupCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      stock: parseInt(event.target.stock.value),
      id: v4()
    });
  }

  NewSoupForm.propTypes = {
    onNewSoupCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewSoupFormSubmission}
        buttonText="Add Soup"/>
    </React.Fragment>
  );
}

export default NewSoupForm;