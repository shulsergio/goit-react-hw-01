import css from "./TransactionHistory.module.css"

export default function TransactionHistoryItem({ item }) {
   
    const { type, amount, currency } = item;
    const containerClsx = [css.tableData,css.typeRowData];
    return (
<tr className={css.tableRowData}>
      <td className={containerClsx.join(" ")}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
      </tr>  
    )
}