import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT
} from './actions';
const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case DELETE_RESULT:
      // const id = 1
      // const newArray = [...state.results]
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
