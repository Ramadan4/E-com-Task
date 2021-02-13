import * as ActionTypes from '../Action/actionTypes';

const intialState = {
  count: 0,
};

export const cartReducr = (state = intialState, action) => {
  if (action.type == 'ADD_TO_CART') {
    return {count: state.count + 1};
  } else if (action.type == 'REMOVE_FROM_CART') {
    return {count: state.count - 1};
  } else if (action.type == 'CLEAR') {
    return {count: state.count == 0};
  }

  return state;
};
