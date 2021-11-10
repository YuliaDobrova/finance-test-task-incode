import socket from '../../helpers/socket';
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
} from './tickersActions';

const fetchTickers = () => {
  const action = async dispatch => {
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
  return action;
};

export default fetchTickers;
