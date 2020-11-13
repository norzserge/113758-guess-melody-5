import React, {Fragment} from 'react';
import {audioPlayerType} from './audio-player-type';

const AudioPlayer = (props) => {
  const {isLoading, onPlayButtonClick, isPlaying, children} = props;
  return (
    <Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type='button'
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className='track__status'>
        {children}
      </div>
    </Fragment>
  );
};

AudioPlayer.propTypes = audioPlayerType;

export default AudioPlayer;
