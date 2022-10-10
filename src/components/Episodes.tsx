import { useEpisode } from '../context/EpisodeContext';
import React, { useEffect } from 'react';
import * as ACTION_TYPES from '../store/actions/action_type';
import EpisodeItem from './EpisodeItem';
import {IEpisode} from "../store/types"

const Episodes: React.FC = () => {
  const {
    episodeDispatch,
    episode: { list },
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

  return (
    <div className='episodes'>
      {list.map((episode: IEpisode) => (
        <EpisodeItem episode={episode} key={episode.id} />
      ))}
    </div>
  );
};

export default Episodes;
