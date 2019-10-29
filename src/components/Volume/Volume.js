import React from 'react'
import PropTypes from 'prop-types'

import VolumeOff from '../../assets/volume-off.svg'
import VolumeOn from '../../assets/volume-on.svg'
import Slider from '../Slider/Slider'

const Volume = ({
  color,
  size,
  volume,
  handleToggleMute,
  handleSeekVolume
}) => (
  <>
    {volume === 0 ? (
      <VolumeOff
        style={{
          fill: color,
          minWidth: Number((size / 2).toFixed()),
          minHeight: Number((size / 2).toFixed()),
          cursor: 'pointer',
          marginRight: Number((size / 4).toFixed())
        }}
        alt='volume-button'
        onClick={handleToggleMute}
      />
    ) : (
      <VolumeOn
        style={{
          fill: color,
          minWidth: Number((size / 2).toFixed()),
          minHeight: Number((size / 2).toFixed()),
          cursor: 'pointer',
          marginRight: Number((size / 4).toFixed())
        }}
        alt='volume-button'
        onClick={handleToggleMute}
      />
    )}

    <Slider
      style={{
        maxWidth: 40,
        minWidth: 40,
        marginRight: Number((size / 4).toFixed()) + 10
      }}
      position={volume * 100}
      onSeek={handleSeekVolume}
      color={color}
      size={size}
    />
  </>
)

Volume.propTypes = {
  handleToggleMute: PropTypes.func,
  handleSeekVolume: PropTypes.func,
  size: PropTypes.number,
  volume: PropTypes.number,
  color: PropTypes.string
}

export default Volume
