import Button from './ConnectionButton';
import Container from './Container/Container';
import TickersList from './TickersList/TickersList';

const App = () => {
  return (
    <Container>
      <TickersList />
      <Button />
    </Container>
  );
};

export default App;
