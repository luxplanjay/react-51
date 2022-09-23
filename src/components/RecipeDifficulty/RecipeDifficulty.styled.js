import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 16px;
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const BadgeList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Badge = styled.p`
  margin: 0;
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 8px;

  background-color: ${p => {
    return p.selected ? 'orangered' : 'white';
  }};

  color: ${p => {
    return p.selected ? 'white' : 'black';
  }};
`;
