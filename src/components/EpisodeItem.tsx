import React from 'react';
import { IEpisode } from '../store/types';
import * as ACTION_TYPES from '../store/actions/action_type';
import { useEpisode } from '../context/EpisodeContext';

interface EpisodeProps {
  episode: IEpisode;
}

const EpisodeItem: React.FC<EpisodeProps> = ({ episode }) => {
  const {
    episodeDispatch,
    episode: { favorites },
  } = useEpisode();
  const toggleFavAction = (episode: IEpisode) => {
    const isInFavList = favorites.includes(episode);
    let dispatchObj = {
      type: ACTION_TYPES.ADD_FAVORITE,
      payload: episode,
    };
    if (isInFavList) {
      const filteredFavList = favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      episodeDispatch({
        type: ACTION_TYPES.REMOVE_FAVORITE,
        payload: filteredFavList,
      });
    } else {
      episodeDispatch(dispatchObj);
    }
  };

  return (
    <div className='episode__item'>
      <img src={episode.image.medium} alt='' />
      <p dangerouslySetInnerHTML={{ __html: episode.summary }}></p>
      <button onClick={() => toggleFavAction(episode)}>{
        favorites.find((fav) => fav.id === episode.id) ? "Unfav" : "Fav"
      }</button>
    </div>
  );
};

export default EpisodeItem;
