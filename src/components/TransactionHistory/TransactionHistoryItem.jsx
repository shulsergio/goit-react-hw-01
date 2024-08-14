export default function TransactionHistoryItem({ item }) {
    const { type, amount, currency } = item;
    return (
<tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
      </tr>  
    )
}