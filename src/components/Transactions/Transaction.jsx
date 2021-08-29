import { TableData } from './TransactionHistory.styled';
export default function Transiction({ type, amount, currency }) {
  return (
    <tr>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
  );
}
