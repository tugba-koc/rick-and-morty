import { EpisodeProvider } from './context/EpisodeContext';
import './App.css';
import Episodes from './components/Episodes';

function App(): JSX.Element {
  return (
    <div className='App'>
      <header>
        <h1>Rich and Morty</h1>
        <p>Select your favorites</p>
      </header>

      <EpisodeProvider>
        <Episodes />
      </EpisodeProvider>
    </div>
  );
}

export default App;
