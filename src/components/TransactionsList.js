import React, {useEffect} from "react";
import Transaction from "./Transaction";


/*PSEUDOCODE 
function Transaction param(transactions, setTransacaction, setSearch and search)
*/
function TransactionsList ({search, setSearch, transactions, setTransactions}){
//filter transactions
//create a variable that will filter transactions

//define transactionFilter
const transactionFilter = transactions.filter((transaction) => transaction.description.toLowerCase().includes(search.toLowerCase(),))

const List = transactionFilter.map((transaction)=>
{
  return(
    <Transaction
    transactions = {transaction.transactions}
    setTransactions = {setTransactions}
    key = {transactions.id}
    date = {transactions.date}
    description = {transaction.description}
    category = {transaction.category}
    amount = {transaction.amount}
    id = {transaction.id}
/>
  );
});


  //useEffect and fetch to grab transactions from locoalhost
useEffect(()=>{
  fetch('http://localhost:8001/transactions')
  .then((response) => response.json())
  .then((data) => setTransactions(data))
},[setTransactions])


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
        {List}
      </tbody>
    </table>
  );
}

export default TransactionsList;
