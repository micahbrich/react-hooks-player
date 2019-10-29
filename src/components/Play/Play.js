import React from 'react'
import PropTypes from 'prop-types'

import PlayStyled from './Play.styled'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'

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
      <img
        src={play}
        style={{
          fill: color,
          minWidth: Number((size / 8 * 3).toFixed()),
          minHeight: Number((size / 2).toFixed()),
          cursor: 'pointer'
        }}
        alt="pause-button"
      />
    ) : (
      <img
        src={pause}
        style={{
          fill: color,
          minWidth: Number((size / 8 * 3).toFixed()),
          minHeight: Number((size / 2).toFixed()),
          cursor: 'pointer'
        }}
        alt="play-button"
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
