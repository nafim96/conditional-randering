
import './App.css';
import User from './components/User/User';
import { useState } from 'react';





function App() {
  const [familiar, setFamiliar]=useState(false);

  return (
    <div className="App">
      <h1>Is Familiar: {familiar.toString()}</h1>
      <button onClick={()=>setFamiliar(!familiar)} className="btn btn-warning">Add Friend</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
