import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/views/Home';
import Favoritos from './assets/views/Favoritos';
import MyContext from './MyContext';
import { useState, useEffect } from 'react';

function App() {
  const [pictures, setPictures] = useState([]);

  const endpoint = 'fotos.json';

  const traerDatos = async () => {
    const res = await fetch(endpoint);
    const { photos } = await res.json();

    const data = photos.map((foto) => {
      const aux = {
        id: foto.id,
        img: foto.src.landscape,
        liked: foto.liked,
        desc: foto.alt,
      };

      return aux;
    });

    setPictures(data);
  };

  useEffect(() => {
    traerDatos();
  }, []);

  const sharedState = { pictures, setPictures };

  return (
    <div className='App'>
      <MyContext.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
