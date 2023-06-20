import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import StateComp from './StateComp';

function App() {
  // const p = new Parent({})
  // const design = p.render()

  // const testDesign = Test({})
  return (
    <div className="App">
      {/* {design} */}
      {/* <Parent /> */}
      <br />
      {/* {testDesign} */}
      {/* <Test /> */}
      <StateComp />
    </div>
  );
}
function Test(props: any) {
  return <div>Functional Component</div>
}
export default App;
