import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Library from './components/Library/Library';
// import { useEffect } from 'react';

function App() {
  // useEffect( ()=>{
  //   fetch('./info.JSON')
  //   .then(res => res.json())
  //   .then(data=>console.log(data));
  // },[])
  return (
    
    <div className="App">
       <div>
      <Header></Header>
      <Library></Library>
    </div>
    </div>
  );
}

export default App;
