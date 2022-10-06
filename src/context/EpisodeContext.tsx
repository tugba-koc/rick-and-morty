import React, { createContext, useContext, useReducer } from 'react';
import {
  episodeReducer,
  episodeInitialState
} from '../store/reducer/episodeReducer';
import { IState, IAction } from '../store/types';

const Episode = createContext<{
  episode: IState;
  episodeDispatch: React.Dispatch<IAction>;
}>({ episode: episodeInitialState, episodeDispatch: () => {} });

interface EpisodeProviderProps {
  children: React.ReactNode;
}

export const EpisodeProvider = ({ children }: EpisodeProviderProps) => {
  const [episode, episodeDispatch] = useReducer(
    episodeReducer,
    episodeInitialState
  );

  return (
    <Episode.Provider value={{ episode, episodeDispatch }}>
      {children}
    </Episode.Provider>
  );
};

export const useEpisode = () => useContext(Episode);
