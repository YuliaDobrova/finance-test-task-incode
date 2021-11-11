const getTickersSelector = state => state.tickers;
const connectionSelector = state => state.isConnected;

export { getTickersSelector, connectionSelector };
