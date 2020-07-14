import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Baitaplayout from './components/Baitaplayout/Baitaplayout';
import Baitaplayout2 from './components/Baitaplayout2/Baitaplayout2';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenDerWithMap from './RenderWithState/RenDerWithMap/RenDerWithMap';
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
     {/* <DataBinding/> */}
     {/* <EventBinding/> */}
    {/* <RenderWithStyle/> */}
    {/* <RenderWithState/> */}
    {/* <RenderWithState/> */}
    <BaiTapChonXe/>
    <RenDerWithMap/>
    </div>
  );
}

export default App;
