import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import AddBook from "./Componets/AddBook/AddBook";
import Graph from "./Componets/Graph/Graph";
import ViewBooks from "./Componets/ViewBooks/ViewBooks";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddJournal from "./Componets/AddJournal/AddJournal";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddBook/>} />
    <Route path='/add-journal' element={<AddJournal/>} />
    <Route path="view" element={<ViewBooks/>} />
    <Route path="/graph" element={<Graph/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
