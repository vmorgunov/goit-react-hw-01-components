import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody } from './TransactionHistory.styled';
import Transiction from './Transaction';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <Transiction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTape = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
