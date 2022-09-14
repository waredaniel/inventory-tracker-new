import React from "react";
import SoupList from "./SoupList";
import NewSoupForm from "./NewSoupForm";
import SoupDetail from "./SoupDetail";

class SoupControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSoupList: [],
      selectedSoup: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedSoup != null){
      this.setState({
        formVisibleOnPage: false,
        selectedSoup: null,
        editing: false,
      })
    } else{
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
};

  handleAddingNewSoupToList = (newSoup) => {
    const newMainSoupList = this.state.mainSoupList.concat(newSoup);
    this.setState({
      mainSoupList: newMainSoupList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedSoup = (id) => {
    const selectedSoup = this.state.mainSoupList.filter(soup => soup.id === id)[0];
    this.setState({selectedSoup: selectedSoup});
  }

  handleDeletingSoup = (id) => {
    const newMainSoupList = this.state.mainSoupList.filter(soup => soup.id !== id);
    this.setState({
      mainSoupList: newMainSoupList,
      selectedSoup: null
    });
  }

  // handleDecrementStock = (id) => {
  //   const sale = this.state.mainSoupList.map((soup) => {
  //     console.log(id, soup.id);
  //     if (soup.id === id) {
  //       if (soup.stock > 0) {
  //         return {
  //           ...soup,
  //           stock: soup.stock - 1,
  //         };
  //       } else {
  //         return {soup};
  //       }
  //     }
  //   });
  //   this.setState({ mainSoupList: sale });
  // };
  
  handleDecrementStock = (id) => {
    const sale = this.state.mainSoupList.find(soup => soup.id === id);
    if(sale.stock > 0){
      const updatedSale = {...sale, stock: sale.stock - 1}
      const updatedMainSoupList = this.state.mainSoupList
      .filter(soup => soup.id !== id)
      .concat(updatedSale);
      this.setState({mainSoupList: updatedMainSoupList})
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedSoup != null) {
      currentlyVisibleState = <SoupDetail soup = {this.state.selectedSoup} onClickingDelete = {this.handleDeletingSoup} />
    buttonText = "Return to Soup Menu";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSoupForm onNewSoupCreation={this.handleAddingNewSoupToList} />
      buttonText = "Return to Soup Menu";
    } else {
      currentlyVisibleState = <SoupList soupList={this.state.mainSoupList} onSoupSelection={this.handleChangingSelectedSoup} onSellClick={this.handleDecrementStock}/>;
      buttonText = "Add New Soup";
    }


    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default SoupControl;