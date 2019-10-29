import styled from 'styled-components';

export const TimeStyled = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({color}) => color};
  font-size: ${({size}) => Number((size / 3).toFixed())}px;
  margin: 0 ${({size}) => Number((size / 4).toFixed())}px;
`;
