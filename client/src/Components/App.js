import Container from './Container/Container';
import TickersList from './TickersList/TickersList';
import ConnectionButton from './ConnectionButton';

const App = () => {
  return (
    <Container>
      <TickersList />
      <ConnectionButton />
    </Container>
  );
};

export default App;
