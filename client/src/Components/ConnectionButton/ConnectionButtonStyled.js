import styled from 'styled-components';

const ButtonStyled = styled.div`
  .ConnectionButton {
    position: relative;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 2px 2px 3px rgba(150, 150, 150, 0.75);

    background-color: #154c79;
    border: 1px solid grey;
    border-radius: 7px;
    font-weight: bold;
    padding: 15px;

    width: 200px;
    color: white;
    cursor: pointer;
    transition: transform 250ms linear;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    align-items: flex-start;

    text-shadow: 2px 2px 3px rgba(150, 150, 150, 0.75);
  }
  .ConnectionButton:hover,
  .ConnectionButton:focus {
    color: palegreen;
    transform: scale(1.05);
  }

  .ButtonIcon {
    position: absolute;
    top: 15px;
    left: 158px;
    width: 20px;
    height: 20px;
    fill: white;

    animation-name: changeIcon;
    animation-duration: 3000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes changeIcon {
    0% {
      transform: scale(1);
      fill: white;
    }
    45% {
      fill: green;
    }
    50% {
      transform: scale(1.15);
    }
    65% {
      fill: tomato;
    }
    100% {
      transform: scale(1);
      fill: white;
    }
  }
`;
export default ButtonStyled;
