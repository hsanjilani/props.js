import React from 'react';
import FullName from '../src/profile/FullName';
import './App.css';
import Profile from '../src/profile/profile';
import Profession from'../src/profile/Profession';
import Bio from'../src/profile/Bio';
import HandelName from'../src/profile/HandelName';

function App() {
  const HandelEvent =(def)=>{
    return(
      alert(`hello ${def}`)
    )
  }
  return (
    <div>
      <h1>Hello This Is My App</h1>
     <FullName FirstName='hsan' LastName='djilani'
     />
     <Profile/>
     <Bio/>
     <Profession/>
     <HandelName HandelEvent={HandelEvent}FirstName='hsan djilani'/>
     
    </div>
  );
}

export default App;
