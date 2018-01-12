import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/types';
import { updatedObject } from '../utility';
const initialState = {
  counter: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1
      // return newState
      return updatedObject(state, { counter: state.counter + 1 });
    // return {
    //   ...state,
    //   counter: state.counter + 1
    // };
    case DECREMENT:
      return updatedObject(state, { counter: state.counter - 1 });
    // return {
    //   ...state,
    //   counter: state.counter - 1
    // };
    case ADD:
      return updatedObject(state, { counter: state.counter + action.val });
    // return {
    //   ...state,
    //   counter: state.counter + action.val
    // };
    case SUBTRACT:
      return updatedObject(state, { counter: state.counter - action.val });
    // return {
    //   ...state,
    //   counter: state.counter - action.val
    // };
    default:
      return state;
  }
};

export default counter;
