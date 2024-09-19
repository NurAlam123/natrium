import useMouseHoverEffect from '../../../hooks/useMouseHoverEffect';
import './CursorBlur.css';

const CursorBlur = () => {
  useMouseHoverEffect();
  return (
    <div>
      <div className="cursor"></div>
    </div>
  );
};

export default CursorBlur;
