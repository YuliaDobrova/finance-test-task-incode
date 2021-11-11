import styled from 'styled-components';

const TickerWrapper = styled.div`
  height: 430px;
  .TickerTitle {
    font-size: 40px;
    text-transform: uppercase;
    text-shadow: 4px 4px 4px rgba(150, 150, 150, 1);
    letter-spacing: 0.05em;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .TickerListWrapper {
    display: flex;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .TickerHeadingList {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    list-style: none;
  }
  .TickerHeadingListItem {
    box-shadow: 2px 2px 3px rgba(150, 150, 150, 0.75);
    list-style: none;
    background-color: #154c79;
    border: 1px solid grey;
    border-radius: 7px;
    font-weight: bold;
    padding: 10px;
    margin: 7px;
    width: 80px;
  }
  .TickersList {
    display: flex;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    list-style: none;
  }
`;
export default TickerWrapper;
