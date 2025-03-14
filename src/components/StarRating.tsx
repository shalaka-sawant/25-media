import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={`text-yellow-500 text-2xl ${index < rating ? 'opacity-100' : 'opacity-50'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
