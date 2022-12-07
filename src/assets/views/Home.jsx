import '../styles/Home.css';
import Card from '../components/Card';
import { useContext, useEffect } from 'react';
import MyContext from '../../MyContext';

const Home = () => {
  const estadoCompartido = useContext(MyContext);
  const pictures = estadoCompartido.pictures;
  const setPictures = estadoCompartido.setPictures;

  const handleClick = (id) => {
    setPictures((prePictures) =>
      prePictures.map((pic) => ({
        ...pic,
        liked: pic.id === id ? !pic.liked : pic.liked,
      }))
    );
  };

  return (
    <main>
      <h2 className='home-title'>Natural Pic</h2>
      <div className='pics-container'>
        {pictures &&
          pictures.map((pic) => (
            <Card picture={pic} handleClick={handleClick} filled={pic.liked} key={pic.id} />
          ))}
      </div>
    </main>
  );
};

export default Home;
