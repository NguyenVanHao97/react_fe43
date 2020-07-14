import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Baitaplayout from './components/Baitaplayout/Baitaplayout';
import Baitaplayout2 from './components/Baitaplayout2/Baitaplayout2';
import DataBinding from './DataBinding/DataBinding';
//nội dung react function chứa trong lệnh return của hàm 
function App() {
  return (
    <div className="App">
     {/* hello cybersoft */}
     {/* <Header></Header> */}
     {/* <Header></Header> */}
     {/* <Header/> */}
     {/* <Baitaplayout/> */}
     {/* <Baitaplayout2/> */}
     <DataBinding/>
    </div>
  );
}

export default App;
