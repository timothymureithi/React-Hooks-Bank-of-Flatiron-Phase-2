import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  //set state to an empty string
  //allows to clear the values from the input field once data is submitted
  const [search, setSearch] = useState("")
  return (


  <div>
      <Search search={search} setSearch={setSearch} />
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} />
      <TransactionsList search={search} setSearch={setSearch} setTransactions={setTransactions} transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
