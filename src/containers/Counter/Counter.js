import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT
} from '../../store/actions';

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <CounterOutput
          value={this.props.counter} /*value={this.state.counter*/
        />
        <CounterControl
          label="Increment"
          clicked={
            this.props
              .onIncrementCounter /*() => this.counterChangedHandler('inc')*/
          }
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAddCounter: () => dispatch({ type: ADD, val: 7 }),
    onSubtractCounter: () => dispatch({ type: SUBTRACT, val: 8 }),
    onStoreResult: result => dispatch({ type: STORE_RESULT, result: result }),
    onDeleteResult: id => dispatch({ type: DELETE_RESULT, resultElId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
