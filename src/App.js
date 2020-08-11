import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';


function App() {
  return (
    <div>
    <p> 안녕하 세요 ! </p>
    <Button Primary> hi </Button>
    <Progress percent = {33} indicating/>
    </div>
  );
}

export default App;
