import React, {useEffect} from "react";
import Transaction from "./Transaction";


/*PSEUDOCODE 
function Transaction param(transactions, setTransacaction, setSearch and search)
*/
function TransactionsList ({search, setSearch, transactions, setTransactions}){
//useEffect and fetch to grab transactions from locoalhost
useEffect(()=>{
  fetch()
})


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
        {TransactionsList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
