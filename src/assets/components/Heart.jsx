import { FaHeart } from 'react-icons/fa';

const Heart = ({ filled, handleClick }) => {
  return (
    <FaHeart
      className={filled ? 'icon liked' : 'icon'}
      onClick={handleClick}
    />
  );
};

export default Heart;
