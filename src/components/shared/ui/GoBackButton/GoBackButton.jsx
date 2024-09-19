import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="button inline-block mb-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default GoBackButton;
