import React from "react";

import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { removeExistingFeature, addNewFeature } from "./actions";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an feature
    props.removeExistingFeature(item);
  };

  const addFeature = item => {
    // dipsatch an action here to add an item
    props.addNewFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { removeExistingFeature, addNewFeature }
)(App);
