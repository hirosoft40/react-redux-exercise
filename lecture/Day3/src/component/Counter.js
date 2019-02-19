import React, { Component } from "react";
import counterAction from "../action/counterAction";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.currentCountInStore}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(counterAction())
  };
}

function mapStateToProps(state) {
  return {
    currentCountInStore: state.count
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
