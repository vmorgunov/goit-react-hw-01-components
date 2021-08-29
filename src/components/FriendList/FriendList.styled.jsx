import styled from '@emotion/styled';

export const Online = styled.span`
  background-color: var(--green-color);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Offline = styled.span`
  background-color: var(--red-color);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 48px;
  margin-right: 10px;
`;

export const Name = styled.p``;

export const Item = styled.li`
  display: flex;
  width: 200px;
  border: #000 1px solid;
  align-items: center;
  padding: 5px 20px;
  margin-bottom: 10px;
  box-shadow: 0px 3px 15px -1px #000000;
`;

export const List = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
`;
