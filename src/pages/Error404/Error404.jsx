import { Link } from 'react-router-dom'
import NaElectrons from '../../components/shared/ui/NaElectrons/NaElectrons'
import './Error404.css'

const Error404 = () => {
    return (
        <div className='error-404-main-container'>
            <div className='error-404-na-container'>
                <NaElectrons />
            </div>
            <div className='error-container'>
                <p className='error-text'>404 | Not Found</p>
                <p>Go back to <Link to={'/'} className='error-home-link'>Home</Link></p>
            </div>
        </div>
    )
}

export default Error404