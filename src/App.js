import './App.css';
import AppRouter from './components/AppRouter';
import ButtonAppBar from './components/SimpleHeader';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <AppRouter />
    </div>
  );
}

export default App;
