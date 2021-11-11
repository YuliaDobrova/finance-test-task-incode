import React from 'react';
import PropTypes from 'prop-types';

import TickersListItemStyled from './TickersListItemStyled';

const TickersListItem = ({
  ticker,
  price,
  change,
  change_percent,
  dividend,
  yield: yeildValue,
  oldPrice,
}) => {
  const priceClassName = oldPrice > price ? 'PriceLow' : 'PriceHigh';
  return (
    <TickersListItemStyled>
      <ul className="Tickers__List">
        <li className="Tickers__ListItem">{ticker}</li>
        <li className={`Tickers__ListItem ${priceClassName}`}>{price}</li>
        <li className="Tickers__ListItem">{change}</li>
        <li className="Tickers__ListItem">{change_percent}</li>
        <li className="Tickers__ListItem">{dividend}</li>
        <li className="Tickers__ListItem">{yeildValue}</li>
      </ul>
    </TickersListItemStyled>
  );
};

export default TickersListItem;

TickersListItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  change_percent: PropTypes.string.isRequired,
  dividend: PropTypes.string.isRequired,
  yield: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
};
