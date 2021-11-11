import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducers from './tickers/tikersReducers';

const store = configureStore({
  reducer: combineReducers({
    tickers: reducers.tickersReducer,
    isConnected: reducers.connectionReducer,
  }),
});

export default store;
