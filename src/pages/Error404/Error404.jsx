import { Link } from 'react-router-dom';
import NaElectrons from '../../components/shared/ui/NaElectrons/NaElectrons';

const Error404 = () => {
  return (
    <div className="flex h-lvh flex-col justify-center items-center">
      <NaElectrons />
      <div className="error-container">
        <p className="font-bold text-[1.8rem]">404 | Not Found</p>
        <p>
          Go back to{' '}
          <Link to={'/'} className="text-blue font-semibold">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error404;
