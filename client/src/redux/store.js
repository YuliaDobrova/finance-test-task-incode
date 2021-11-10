import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickers/tikersReducers';

const store = configureStore({
  reducer: { tickers: tickersReducer },
});

export default store;
