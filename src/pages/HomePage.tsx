import { Link } from 'react-router-dom'
import LOGO from '../assets/Logo.png'


const HomePage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <img src={LOGO} alt="" />
            <h1 className='text-lg mt-3 font-semibold'>Safe | Simple | Secure</h1>

            <Link to={'/login'}>
            <button className='btn shadow-lg text-xl mt-40'>Get Start</button>
            </Link>
        </div>
    )
}

export default HomePage
