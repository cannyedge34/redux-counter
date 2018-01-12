import { STORE_RESULT, DELETE_RESULT } from './types';
export const saveResult = res => {
  //const updatedReult = res * 2;
  return {
    type: STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().counter
      // console.log(getState().ctr.counter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = resElId => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId
  };
};
