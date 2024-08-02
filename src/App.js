import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Movie } from './components/Movie/Movie';
import {Data} from "./components/Data/Data"

function App() {
  return(
  <div>
    <Routes>
      <Route path="/" element={<Movie/>}/>
      <Route path="/:title" element= {<Data/>}/>
    </Routes>

  </div>
  )
}
export default App;
