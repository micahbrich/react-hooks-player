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
	                volumeControls,
			preload
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
		handleSeekVolume
	} = usePlayer();

	return (
		<PlayerStyled height={height} background={background}>
			<audio
				ref={audioRef}
				src={url}
				preload={preload}
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
	background: '#4b598e',
	color: 'white',
	volumeControls: true,
	height: 50,
	preload: 'auto'
};

Player.propTypes = {
	background: PropTypes.string,
	url: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
	volumeControls: PropTypes.bool,
	height: PropTypes.number,
	preload: PropTypes.string
};

export default Player;
