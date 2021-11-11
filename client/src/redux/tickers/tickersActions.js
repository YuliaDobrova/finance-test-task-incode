import { createAction } from '@reduxjs/toolkit';

const getTickersRequest = createAction('tickers/getTickersRequest');
const getTickersSuccess = createAction('tickers/getTickersSuccess');
const getTickersError = createAction('tickers/getTickersError');

const setConnection = createAction('connection/setConnection');
const stopConnection = createAction('connection/stopConnection');

export {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  setConnection,
  stopConnection,
};
