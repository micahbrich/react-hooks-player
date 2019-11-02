import React from 'react';
import PropTypes from 'prop-types';

import VolumeOff from '../../assets/volume-off.svg';
import VolumeOn from '../../assets/volume-on.svg';
import Slider from '../Slider/Slider';
import {useVolume} from './hooks';

const Volume = ({
	color,
	size,
	volume,
	handleSeekVolume
}) => {
	const {isOpened, toggleOpen} = useVolume();

	return (
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
					alt="volume-button"
					onClick={toggleOpen}
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
					alt="volume-button"
					onClick={toggleOpen}
				/>
			)}

			{isOpened && (
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
			)}
		</>
	);
};

Volume.propTypes = {
	handleSeekVolume: PropTypes.func,
	size: PropTypes.number,
	volume: PropTypes.number,
	color: PropTypes.string
};

export default Volume;
