import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 280px;
`;

export const Desrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: var(--accent-color);
`;

export const Location = styled.p`
  margin-bottom: 10px;
  color: var(--accent-color);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Label = styled.span`
  display: flex;
  color: var(--accent-color);
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li``;
