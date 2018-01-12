import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
        <CounterControl label="Add 7" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 8"
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
    onIncrementCounter: () => dispatch(actionsCreators.increment()),
    onDecrementCounter: () => dispatch(actionsCreators.decrement()),
    onAddCounter: () => dispatch(actionsCreators.add(7)),
    onSubtractCounter: () => dispatch(actionsCreators.subtract(8)),
    onStoreResult: result => dispatch(actionsCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionsCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
