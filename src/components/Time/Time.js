import React from 'react';
import PropTypes from 'prop-types';

import {TimeStyled} from './Time.styled';

const Time = ({
	              time,
	              color,
	              size,
	              style
}) => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const secondsFormatted = seconds > 9 ? seconds : '0' + seconds;
	const display = `${minutes}:${secondsFormatted}`;

	return (
		<TimeStyled
			color={color}
			size={size}
			style={style}
		>
			{display}
		</TimeStyled>
	);
};

Time.propTypes = {
	time: PropTypes.number,
	style: PropTypes.object,
	color: PropTypes.string,
	size: PropTypes.number
};

export default Time;

