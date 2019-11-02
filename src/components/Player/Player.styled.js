import styled from 'styled-components';

export const PlayerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: ${({height}) => height}px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({height}) => height}px;
  margin: 20px 0;
  user-select: none;
  background-color: ${({background}) => background};
`;

export const TitleStyled = styled.div`
	width: 100%;
	color: ${({color}) => color};
	font-family: Roboto, sans-serif;
	font-size: ${({size}) => Number((size / 8 * 3).toFixed())}px;
`;
