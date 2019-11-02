import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({size}) => (size / 5 * 2).toFixed()}px 0;
  width: 100%;
`;

export const SliderStyled = styled.div`
  flex-grow: 1;
  cursor: pointer;
  position: relative;
  border-radius: ${({size}) => size}px;;
  height: ${({size}) => (size / 5).toFixed()}px;
  background-color: #5e6fafba;
`;

export const ProgressStyled = styled.div`
  border-radius: inherit;
  position: absolute;
  pointer-events: none;
  height: ${({size}) => (size / 5).toFixed()}px;
  background-color: ${({color}) => color};
`;

export const PinStyled = styled.div`
  height: ${({size}) => (size / 20 * 7).toFixed()}px;
  width: ${({size}) => (size / 20 * 7).toFixed()}px;
  border-radius: 50%;
  position: absolute;
  pointer-events: all;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.32);
  transform: translate(50%, -25%) scale(1);
  right: 0;
  top: 0;
  background-color: ${({color}) => color};
  
  &:hover{
  	  transform: translate(50%, -25%) scale(1.1);
  }
`;
