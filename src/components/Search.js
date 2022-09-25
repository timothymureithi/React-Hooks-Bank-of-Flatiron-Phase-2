import React from "react";

//Filter transactions by typing into the search bar.

function Search({search, setSearchTransaction}) {
  //1. create a function (handleSearch) with an event 
  function handleSearch(event){
    setSearchTransaction(event.target.value)
  }
  
 // function handleSearch(event) {
 //   setSearchTransaction(event.target.value)
  

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        //remove console.log and add handleSearch props
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;