import React from "react";
import Transaction from "./Transaction";

//use map method for the transactions
//- Delete a transaction which will remove it from the table and delete it from the backend.

function TransactionsList({transactions, deleteRecord}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map((data, key) => {
          return(
            <Transaction date={data.date} description={data.description} category={data.category} amount={data.amount} key={key} id={data.id} deleteList={deleteRecord} />
          )
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;