import {useState, useEffect, useRef} from 'react';

export const usePlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [duration, setDuration] = useState(0);
	const [time, setTime] = useState(0);
	const [volume, setVolume] = useState(1);
	const audioRef = useRef(null);

	const position = duration && time ? Number((100 / duration * time).toFixed(2)) : 0;

	const handlePlay = () => {
		audioRef.current.play();
		setIsPlaying(true);
		setIsActive(true);
	};

	const handlePause = () => {
		audioRef.current.pause();
		setIsPlaying(false);
	};

	const handleSeekTrack = position => {
		const time = Number((position * duration).toFixed());

		setTime(time);
		audioRef.current.currentTime = time;
	};

	const handleToggleMute = () => {
		if (volume > 0) {
			setVolume(0);
			audioRef.current.volume = 0;
		} else {
			setVolume(1);
			audioRef.current.volume = 1;
		}
	};

	const handleSeekVolume = volume => {
		setVolume(volume);
		audioRef.current.volume = volume;
	};

	useEffect(() => {
		audioRef.current.onloadedmetadata = () => {
			const time = Number(audioRef.current.duration.toFixed());

			setDuration(time);
		};

		audioRef.current.ontimeupdate = () => {
			// TODO: обновлять один раз в секунду
			const time = Number(audioRef.current.currentTime.toFixed());

			setTime(time);
		};

		audioRef.current.onended = () => {
			setIsPlaying(false);
			setIsActive(false);
			setTime(0);
		};
	}, []);

	return {
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
	};
};
