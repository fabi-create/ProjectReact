import './App.css';
import Magasin from './components/Magasin';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/layouts/Header';
import About from './components/pages/About';

import AddProduit from './components/AddProduit';
import axios from 'axios';
import { useState } from 'react';
import Search from './components/Search';

function App() {
  const [produits, setProduits] = useState([]);
  const handleAdd=(nom,Prix,Description)=> {
    axios
      .post('http://localhost:3333/produits/', { nom, Prix,Description})
      .then((res) => {
        setProduits([...produits, res.data]);
      });
  }

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Magasin/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/addProduit" element={<AddProduit handleAdd={handleAdd}/>}/>
      <Route path="/searchProduit" element={<Search/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
