import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import './styles/GoBackButton.css';


const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="go-back-button-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft />
            </div>
        </div>
    )
}

export default GoBackButton