import React from 'react';
import { IEpisode } from '../store/types';
import { useEpisode } from '../context/EpisodeContext';

interface EpisodeProps {
  episode: IEpisode;
  toggleFavAction: (episode: IEpisode) => void;
}

const EpisodeItem: React.FC<EpisodeProps> = ({ episode, toggleFavAction }) => {
  const {
    episode: { favorites },
  } = useEpisode();

  return (
    <div className='episode__item'>
      <img src={episode.image.medium} alt='' />
      <p dangerouslySetInnerHTML={{ __html: episode.summary }}></p>
      <button
        className={
          favorites.find((fav) => fav.id === episode.id) ? 'clicked' : ''
        }
        onClick={() => toggleFavAction(episode)}
      >
        {favorites.find((fav) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
      </button>
    </div>
  );
};

export default EpisodeItem;
