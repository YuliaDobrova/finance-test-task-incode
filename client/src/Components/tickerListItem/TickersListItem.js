import React from 'react';

import TickersListItemStyled from './TickersListItemStyled';

const TickersListItem = ({
  ticker,
  price,
  change,
  change_percent,
  dividend,
}) => {
  return (
    <TickersListItemStyled>
      <ul className="Tickers__List">
        <li className="Tickers__ListItem">{ticker}</li>
        <li className="Tickers__ListItem">{price}</li>
        <li className="Tickers__ListItem">{change}</li>
        <li className="Tickers__ListItem">{change_percent}</li>
        <li className="Tickers__ListItem">{dividend}</li>
      </ul>
    </TickersListItemStyled>
  );
};

export default TickersListItem;
