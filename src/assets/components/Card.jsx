import '../styles/Card.css';
import Heart from './Heart';

const Card = ({ picture, handleClick, filled }) => {

  return (
    <div className='card-container'>
      <div
        className='card-info-container'
        style={{ backgroundImage: `url(${picture.img})` }}
      >
        {handleClick && <Heart
          filled={filled}
          handleClick={()=>handleClick(picture.id)}
        />}
        <p className='card-text'>{picture.desc}</p>
      </div>
    </div>
  );
};

export default Card;
