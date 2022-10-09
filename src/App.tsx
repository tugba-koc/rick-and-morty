import './App.css';
import Test from './components/Test';
import { EpisodeProvider } from './context/EpisodeContext';

function App(): JSX.Element {
  return (
    <div className='App'>
      <h1>Rich and Morty</h1>
      <p>Select your favorites</p>
      <EpisodeProvider>
        <Test/>
      </EpisodeProvider>
    </div>
  );
}

export default App;
