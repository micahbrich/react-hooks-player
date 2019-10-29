import React from 'react'
import PropTypes from 'prop-types'

import PlayStyled from './Play.styled'
import PlayIcon from '../../assets/play.svg'
import PauseIcon from '../../assets/pause.svg'

const Play = ({
  isPlaying,
  onPlay,
  onPause,
  color,
  size
}) => (
  <PlayStyled
    onClick={isPlaying ? onPause : onPlay}
    size={size}
  >
    {isPlaying ? (
      <PauseIcon
        style={{
          fill: color,
          minWidth: Number((size / 8 * 3).toFixed()),
          minHeight: Number((size / 2).toFixed()),
          cursor: 'pointer'
        }}
        alt='play-button'
      />
    ) : (
      <PlayIcon
        style={{
          fill: color,
          minWidth: Number((size / 8 * 3).toFixed()),
          minHeight: Number((size / 2).toFixed()),
          cursor: 'pointer'
        }}
        alt='pause-button'
      />
    )}
  </PlayStyled>
)

Play.propTypes = {
  isPlaying: PropTypes.bool,
  size: PropTypes.number,
  onPlay: PropTypes.func,
  color: PropTypes.string,
  onPause: PropTypes.func
}

export default Play
