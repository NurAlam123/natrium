import "./LoadingSpinner.css";

const LoadingSpinner = ({ size }) => {
    return (
        <div>
            <div className="spinner animation-spin" style={{
                width: size + 'px',
                height: size + 'px'
            }}>
            </div>
        </div>
    )
}

export default LoadingSpinner