import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  //set state to an empty string
  //allows to clear the values from the input field once data is submitted
  //creare a function to fetch transactions from the local json server [fetch(url)-then(response)=>response.json]
  function getData(){
    fetch("http://localhost:8001/transactions")
    .then((response) => response.json())
    .then(setTransactions);
  }
  
  //run useEffect to call fetch data
  useEffect(getData, [])
  const [search, setSearch] = useState("")

  //const handleSearch = () => {
  //function to handle data searched in order to get the service we requre
  //add a variable to allow transaction to be filtered using lowerer case
  function handleData(search){
    if (search === ""){
      getData(transactions)
    }
    else {
      const searchTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
      })
      setTransactions(searchTransactions)
    }
  

  //Add new transactions to list
  function handleAddTransaction(transaction)
  setTransactions([...transactions, transaction])
  }

  return (
  <div>
      <Search search={handleSearch} />
      <AddTransactionForm handleAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions}/>
    </div>
  );
  }

export default AccountContainer;
