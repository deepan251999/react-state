import Count from './components/use-state/count'
import Word from './components/use-state/word'
import Login from './components/form/login'
import React,{useState} from 'react';
import TodoList from './components/TO-Do-LIST/todolist';
import './App.css';


function App() {
  const[deepan,setDeepan]=useState(false);
  const loginsHandler=(deep)=>{
    setDeepan(deep)
  }
  return (
    <div className="App">
      {!deepan && <Login isLogin={loginsHandler}/>}
      {deepan && <Count/>}
      {deepan && <Word/>}
      {/* <Login/>
      <Count/> */}
      {/* <Word/> */}
      <TodoList/>
    </div>
  );
}

export default App;
