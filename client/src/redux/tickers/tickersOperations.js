import socket from '../../helpers/socket';
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  setConnection,
} from './tickersActions';

const fetchTickers = () => {
  const actionFetch = async dispatch => {
    dispatch(getTickersRequest());
    try {
      socket.connect(socket.emit('start'));
      socket.on('ticker', function (res) {
        dispatch(getTickersSuccess(res));
      });
    } catch (error) {
      dispatch(getTickersError(error.message));
    }
  };
  return actionFetch;
};

const connectionOperation = () => {
  const actionConnect = async dispatch => {
    dispatch(setConnection());
  };
  return actionConnect;
};

export { fetchTickers, connectionOperation };
