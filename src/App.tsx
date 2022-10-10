import { EpisodeProvider, useEpisode } from './context/EpisodeContext';
import './App.css';
import EpisodesList from './components/EpisodesList';

function App(): JSX.Element {
  const {
    episode: { favorites },
  } = useEpisode();
  return (
    <div className='App'>
      <header>
        <h1>Rich and Morty</h1>
        <p>Select your favorites</p>
        <div className='header__favorite-number'>
          Favorite(s) : {favorites.length}
        </div>
      </header>
      <EpisodesList />
    </div>
  );
}

export const WithProvider: React.FC = () => {
  return (
    <EpisodeProvider>
      <App />
    </EpisodeProvider>
  );
};
