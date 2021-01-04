import React from 'react';
import './App.css';
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import Filter from "./Components/Filter"


function App() {
  return (
    <div className="App">
    <h2 >This is My ToDo Application with Redux YAAAYY =D </h2>
    <AddTask />
    <ListTask /> 
    <Filter/>
    </div> 
  );
}


export default App;
