import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div>
      <Button text={'블로그'}>
        <div>자식</div>
      </Button>
    </div>
  );
}

export default App;
