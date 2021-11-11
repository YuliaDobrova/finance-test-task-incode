import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { getTickersSelector } from '../../redux/tickers/tickersSelectors';
import { fetchTickers } from '../../redux/tickers/tickersOperations';
import TickersListItem from './TickerListItem/TickersListItem';
import TickerWrapper from './TickersListStyled';

const TickersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  const { prevTickers, currentTickers } = useSelector(getTickersSelector);
  const prevPrices = prevTickers.map(ticker => ticker.price);

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
          <li className="TickerHeadingListItem">Yield</li>
        </ul>
        <ul className="TickersList">
          {currentTickers.map((ticker, index) => (
            <TickersListItem
              key={v4()}
              {...ticker}
              oldPrice={prevPrices[index]}
            />
          ))}
        </ul>
      </div>
    </TickerWrapper>
  );
};

export default TickersList;
