const LoadingSpinner = ({ size }: { size: number }) => {
  return (
    <div>
      <div
        className="spinner animate-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
