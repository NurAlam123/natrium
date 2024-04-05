import { Outlet } from 'react-router-dom'
import Socials from '../components/shared/Socials'

const Root = () => {
    return (
        <main>
            <section>
                <Outlet />
            </section>
            <footer className='root-footer'>
                <Socials />
            </footer>
        </main>
    )
}

export default Root