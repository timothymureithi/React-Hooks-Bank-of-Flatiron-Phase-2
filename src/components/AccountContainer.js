import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
//set state to an empty string
  //allows to clear the values from the input field once data is submitted
  //creare a function to fetch transactions from the local json server [fetch(url)
const [transactions, setTransactions] = useState([])
function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then(setTransactions);
}
  //run useEffect to call fetch data
useEffect(fetchTransactions, [])

  //const handleSearch = () => {
  //function to handle data searched in order to get the service we requre
  //add a variable to allow transaction to be filtered using lowerer case
function handleSearch(search){
  if (search === ''){
    fetchTransactions(transactions)
  } else {
 
  const searchTransactions = transactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(search.toLowerCase())
  })
  setTransactions(searchTransactions) }
}
//Extra deliverable to allow users to delete transactions using handler

function deleteRecord(id) {
    const updateTransactions = transactions.filter(transaction => {
      return transaction.id !== id
    })
    setTransactions(updateTransactions)
}

function handleAddTransaction(transaction){
  setTransactions([...transactions, transaction])
}



  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm handleAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} deleteRecord={deleteRecord} />
    </div>
  );
}
export default AccountContainer;