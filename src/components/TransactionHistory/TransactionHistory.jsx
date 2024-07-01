import clsx from 'clsx';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={clsx(s.heading, s.cell)}>Type</th>
          <th className={clsx(s.heading, s.cell)}>Amount</th>
          <th className={clsx(s.heading, s.cell)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.row} key={id}>
            <td className={clsx(s.cell, s.typeColumn)}>{type}</td>
            <td className={s.cell}>{amount}</td>
            <td className={s.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
