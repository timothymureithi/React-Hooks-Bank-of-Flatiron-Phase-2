import React from "react";

function AddTransactionForm({handleAddTransaction}) {

      //handler with a submit event
  function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      date: event.target.date.value,
      description: event.target.description.value,
      category: event.target.category.value,
      amount: event.target.amount.value
    }

    handleAddTransaction(newTransaction)
    event.target.reset();

          //#### POST `/transactions`
    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: { "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(() => {
      return handleAddTransaction(newTransaction)
    })


  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;