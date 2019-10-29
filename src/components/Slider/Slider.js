import React from 'react';
import PropTypes from 'prop-types';

import {
	PinStyled,
	ProgressStyled,
	SliderStyled,
	Wrapper
} from './Slider.styled';
import {useSlider} from './hooks';

const Slider = ({
	                style,
	                onSeek,
	                position,
	                size,
	                color
}) => {
	const {
		isDraging,
		refTarget,
		handleClick,
		manualPosition,
		handleMouseDown,
		handleTouchStart
	} = useSlider({onSeek});
	const currentPosition = isDraging ? manualPosition && manualPosition.toFixed() : position;

	return (
		<Wrapper
			style={{...style}}
			onClick={handleClick}
			size={size}
		>
			<SliderStyled
				ref={refTarget}
				size={size}
			>
				<ProgressStyled
					style={{width: `${currentPosition}%`}}
					color={color}
					size={size}
				>
					<PinStyled
						onMouseDown={handleMouseDown}
						onTouchStart={handleTouchStart}
						className="pin"
						color={color}
						size={size}
					/>
				</ProgressStyled>
			</SliderStyled>
		</Wrapper>
	);
};

Slider.propTypes = {
	position: PropTypes.number,
	onSeek: PropTypes.func,
	size: PropTypes.number,
	color: PropTypes.string,
	style: PropTypes.object
};

export default Slider;
