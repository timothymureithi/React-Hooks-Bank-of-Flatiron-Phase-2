import React from "react";

function Transaction({description, date, category, id, amount,  deleteList}) {

  //Add onClick button 
  //- Delete a transaction which will remove it from the table and delete it from the backend.
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button style={{color: "#FF0000", borderRadius: '3px'}} onClick={()=> deleteList(id)}>DELETE</button>
      </td>

    </tr>
  );
}

export default Transaction;
