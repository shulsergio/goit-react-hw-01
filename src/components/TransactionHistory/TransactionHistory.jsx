import TransactionHistoryItem from "./TransactionHistoryItem";
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ transactions }) {
    console.log(transactions);
    return (
        <><table className={css.allTable}>
    <thead>
    <tr >
      <th className={css.columnType}>Type</th>
      <th className={css.columnType}>Amount</th>
      <th className={css.columnType}>Currency</th>
    </tr>
  </thead>
  <tbody className={css.tableData}>
{transactions.map(transaction => (
<TransactionHistoryItem key={transaction.id} item={transaction}/>
))}
</tbody>
</table>
</>
    )
};