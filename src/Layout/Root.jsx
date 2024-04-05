import { Outlet } from 'react-router-dom'
import { FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa'


const Root = () => {
    return (
        <main>
            <section>
                <Outlet />
            </section>
            <footer className='root-footer'>
                <section className='socials'>
                    <p>Socials</p>
                    <div className='social-links'>
                        <a href='mailto:nuralam.rsc@gmail.com' target='_blank'><FaEnvelope /></a>
                        <a href='https://github.com/nuralam123' target='_blank'><FaGithub /></a>
                        <a href='https://facebook.com/nur.0.alam' target='_blank'><FaFacebook /></a>
                    </div>
                </section>
            </footer>
        </main>
    )
}

export default Root