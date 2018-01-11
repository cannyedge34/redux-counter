import { STORE_RESULT, DELETE_RESULT } from '../actions';
const initialState = {
  results: []
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
          value: action.result
        })
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

export default result;
