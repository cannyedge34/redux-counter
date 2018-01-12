import { STORE_RESULT, DELETE_RESULT } from '../actions/types';
import { updatedObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updatedObject(state, {
    results: updatedArray
  });
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return updatedObject(state, {
        results: state.results.concat({
          id:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
          value: action.result * 2
        })
      });
    // return {
    //   ...state,
    //   results: state.results.concat({
    //     id:
    //       '_' +
    //       Math.random()
    //         .toString(36)
    //         .substr(2, 9),
    //     value: action.result * 2
    //   })
    // };
    case DELETE_RESULT:
      return deleteResult(state, action);
    // const id = 1
    // const newArray = [...state.results]
    // newArray.splice(id, 1)
    // const updatedArray = state.results.filter(
    //   result => result.id !== action.resultElId
    // );
    // return updatedObject(state, {
    //   results: updatedArray
    // });
    // return {
    //   ...state,
    //   results: updatedArray

    // };
    default:
      return state;
  }
};

export default result;
