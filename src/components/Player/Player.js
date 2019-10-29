import React from 'react';
import PropTypes from 'prop-types';

import {
	TitleStyled,
	PlayerStyled
} from './Player.styled';
import Play from '../Play/Play';
import Slider from '../Slider/Slider';
import {usePlayer} from './hooks';
import Time from '../Time/Time';
import Volume from '../Volume/Volume';

const Player = ({
	                url,
	                title,
	                color,
	                height,
	                background,
	                volumeControls
}) => {
	const {
		time,
		volume,
		audioRef,
		position,
		duration,
		isActive,
		isPlaying,
		handlePlay,
		handlePause,
		handleSeekTrack,
		handleToggleMute,
		handleSeekVolume
	} = usePlayer();

	return (
		<PlayerStyled height={height} background={background}>
			<audio
				ref={audioRef}
				src={url}
			/>
			<Play
				isPlaying={isActive && isPlaying}
				onPlay={handlePlay}
				onPause={handlePause}
				color={color}
				size={height}
			/>
			{isActive ? (
				<>
					<Slider
						position={position}
						onSeek={handleSeekTrack}
						color={color}
						size={height}
					/>
					<Time
						time={duration - time}
						color={color}
						size={height}
					/>
					{volumeControls && (
						<Volume
							color={color}
							size={height}
							handleSeekVolume={handleSeekVolume}
							handleToggleMute={handleToggleMute}
							volume={volume}
						/>
					)}
				</>
			) : (
				<>
					<TitleStyled
						color={color}
						onClick={handlePlay}
						size={height}
					>
						{title}
					</TitleStyled>
					<Time
						time={duration}
						color={color}
						size={height}
						style={{
							paddingRight: Number((height / 8).toFixed())
						}}
					/>
				</>
			)}
		</PlayerStyled>
	);
};

Player.defaultProps = {
	background: 'white',
	color: '#9582ab',
	volumeControls: true,
	height: 50
};

Player.propTypes = {
	background: PropTypes.string,
	url: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
	volumeControls: PropTypes.bool,
	height: PropTypes.number
};

export default Player;
