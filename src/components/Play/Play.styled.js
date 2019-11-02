import styled from 'styled-components';

export const PlayStyled = styled.button`
 background: none;
 border: none;
 padding: 0;
 font: inherit;
 cursor: pointer;
 outline: inherit;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right: ${({size}) => Number((size / 10).toFixed())}px;
 min-height: ${({size}) => size}px;
 min-width: ${({size}) => size}px;
`;

export default PlayStyled;
