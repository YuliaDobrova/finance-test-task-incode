import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import socket from '../../helpers/socket';
import { connectionSelector } from '../../redux/tickers/tickersSelectors';
import { stopConnection } from '../../redux/tickers/tickersActions';
import ButtonStyled from './ConnectionButtonStyled';
import sprite from './sprite.svg';

const Button = () => {
  const dispatch = useDispatch();
  const connect = useSelector(connectionSelector);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    if (connect && !isConnected) {
      socket.disconnect();
      dispatch(stopConnection());
    }
    if (!connect && isConnected) {
      socket.connect(socket.emit('start'));
    }
  }, [isConnected]);

  return (
    <ButtonStyled>
      <button
        type="button"
        className="Button"
        onClick={() => setIsConnected(!isConnected)}
      >
        {isConnected ? 'Disconnect' : 'Connect'}
        <svg className="ButtonIcon">
          <use href={sprite + '#icon-connection'} width="20"></use>
        </svg>
      </button>
    </ButtonStyled>
  );
};

export default Button;
