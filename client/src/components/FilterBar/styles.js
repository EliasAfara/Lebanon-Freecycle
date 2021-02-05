import styled from 'styled-components';

export const FilterBarContaier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.toggleBorder}`};
  border-radius: 3px;
  background: ${(props) => props.theme.headerBackground};
  transition: 0.8s all ease;
`;

export const FilterSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin-right: 10px;
`;
