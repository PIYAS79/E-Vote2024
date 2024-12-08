import { useNavigate } from 'react-router-dom'
import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'


const VotePage = () => {

    const navigate = useNavigate();



    return (
        <div  className='flex flex-col w-full h-screen justify-center items-center'>
            <h1 className="text-xl font-bold text-red-900 ">Please Click On Your Choice</h1>
            <h1 className="text-xl font-semibold mt-3">00.00.00</h1>
            <div className='p-2 flex flex-col gap-5 mt-10 w-full'>
                <div className=' flex justify-around items-center text-center w-full'>
                    <div className=''>
                        <img src={P1} alt="" />
                        <p className='text-lg font-bold'>Md Kazi Rasel</p>
                    </div>
                    <input onChange={()=>navigate('/details')} type="checkbox" className="checkbox checkbox-lg bg-gray-50" />
                </div>
                <div className=' flex justify-around items-center text-center'>
                    <div>
                        <img src={P2} alt="" />
                        <p className='text-lg font-bold'>Donald Trump</p>
                    </div>
                    <input onChange={()=>navigate('/thank')} type="checkbox" className="checkbox checkbox-lg bg-gray-50" />
                </div>
                <div className=' flex justify-around items-center text-center'>
                    <div>
                        <img src={P3} alt="" />
                        <p className='text-lg font-bold'>Kim Jong Un</p>
                    </div>
                    <input onChange={()=>navigate('/thank')} type="checkbox" className="checkbox checkbox-lg bg-gray-50" />
                </div>
            </div>
        </div>
    )
}

export default VotePage
