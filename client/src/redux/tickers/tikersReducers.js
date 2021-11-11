import { createReducer } from '@reduxjs/toolkit';
import { getTickersSuccess, stopConnection } from './tickersActions';

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

const connectionReducer = createReducer(false, {
  [getTickersSuccess]: (_, { payload }) => Boolean(payload),
  [stopConnection]: (_, __) => false,
});

const reducers = {
  tickersReducer,
  connectionReducer,
};
export default reducers;
