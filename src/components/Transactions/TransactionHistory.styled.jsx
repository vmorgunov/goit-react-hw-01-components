import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 30px;
  margin-left: 20px;
  border: 1px solid var(--border-color);
  text-align: left;
  border-collapse: collapse;
  width: 30%;
`;

export const TableHeader = styled.th`
  background-color: var(--table-header);
  border: 1px solid var(--border-color);
  text-align: left;
  padding: 15px;
  color: var(--white-color);
`;

export const TableData = styled.td`
  border: 1px solid var(--border-color);
  text-align: left;
  padding: 15px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: var(--table-body);
  }
`;
