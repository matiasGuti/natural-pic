import '../styles/Home.css';
import Card from '../components/Card';
import { useContext } from 'react';
import MyContext from '../../MyContext';

const Favoritos = () => {
  const estadoCompartido = useContext(MyContext);
  const pictures = estadoCompartido.pictures;

  const filteredArray = pictures.filter((pic) => pic.liked);

  return (
    <div className='fav-pics-container'>
      {filteredArray &&
        filteredArray.map((pic) => (
          <Card
            picture={pic}
            handleClick={null}
            filled={pic.liked}
            key={pic.id}
          />
        ))}
    </div>
  );
};

export default Favoritos;
