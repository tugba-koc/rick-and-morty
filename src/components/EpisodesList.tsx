import { useEpisode } from '../context/EpisodeContext';
import React, { useEffect } from 'react';
import * as ACTION_TYPES from '../store/actions/action_type';
import EpisodeItem from './EpisodeItem';
import {IEpisode} from "../store/types"

const EpisodesList: React.FC = () => {
  const {
    episodeDispatch,
    episode: { list, favorites },
  } = useEpisode();
  const fetchData = async () => {
    let res = await fetch(
      'https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes'
    );
    let data = await res.json();
    episodeDispatch({
      type: ACTION_TYPES.FETCH_DATA,
      payload: data._embedded.episodes,
    });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className='episodes'>
      {list.map((episode: IEpisode) => (
        <EpisodeItem toggleFavAction={toggleFavAction} episode={episode} key={episode.id} />
      ))}
    </div>
  );
};

export default EpisodesList;
