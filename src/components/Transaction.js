import React from "react";

//ee a table of the transactions. Date/Description/Category/Amount and id for transactions
//capture transactions data
//Transaction({date, description, category, amount}) 
function Transaction({date, category, description, amount, transactions, id, setTransactions}){
  
 
//Table to include date/description/category/amount
  return (
    
    <table>
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      
    </tr>
    </table>
    
  );
}

export default Transaction;