import { createReducer } from '@reduxjs/toolkit';
import { getTickersSuccess } from './tickersActions';

const initialState = {
  prevTickers: [],
  currentTickers: [],
};

const tickersReducer = createReducer(initialState, {
  [getTickersSuccess]: (state, { payload }) => ({
    prevTickers: state.currentTickers,
    currentTickers: payload,
  }),
});

export default tickersReducer;
