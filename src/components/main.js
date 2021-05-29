import React from 'react';
import Header from './Navbar/Navbar';
import Input from './UserInput/Input';
import Table from './Todolist/list';
import Graph from './Graph/Graph'


function main() {
  return (
    <div>
      <Header />
      <Input />
      <Table />
      <Graph/>
     
    </div>
  );
}

export default main;
