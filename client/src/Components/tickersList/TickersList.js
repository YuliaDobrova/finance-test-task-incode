import { useState, useEffect } from 'react';
import socket from '../helpers/socket';
import { v4 } from 'uuid';

import TickersListItem from '../tickerListItem/TickersListItem';
import TickerWrapper from './TickersListStyled';

const TickersList = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        socket.connect(socket.emit('start'));
        socket.on('ticker', function (res) {
          // console.log(`res`, res);
          setTickers(res);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTickers();
  }, []);

  return (
    <TickerWrapper>
      <h1 className="TickerTitle">Tickers Live</h1>
      <div className="TickerListWrapper">
        <ul className="TickerHeadingList">
          <li className="TickerHeadingListItem">Ticker</li>
          <li className="TickerHeadingListItem">Price</li>
          <li className="TickerHeadingListItem">Change</li>
          <li className="TickerHeadingListItem">Change %</li>
          <li className="TickerHeadingListItem">Dividend</li>
        </ul>
        <ul className="TickersList">
          {tickers.map(ticker => (
            <TickersListItem key={v4()} {...ticker} />
          ))}
        </ul>
      </div>
    </TickerWrapper>
  );
};

export default TickersList;
