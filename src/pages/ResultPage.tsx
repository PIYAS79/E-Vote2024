import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'

const ResultPage = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen flex-col'>
            <div className='flex flex-col gap-5 w-full'>
            <div className=' flex justify-around items-center text-center w-full'>
                <div className=''>
                    <img src={P1} alt="" />
                    <p className='text-lg font-bold'>Md Kazi Rasel</p>
                </div>
                <h1 className='text-2xl font-semibold'>9000</h1>
            </div>
            <div className=' flex justify-around items-center text-center'>
                <div>
                    <img src={P2} alt="" />
                    <p className='text-lg font-bold'>Donald Trump</p>
                </div>
                <h1 className='text-2xl font-semibold'>500</h1>
            </div>
            <div className=' flex justify-around items-center text-center'>
                <div>
                    <img src={P3} alt="" />
                    <p className='text-lg font-bold'>Kim Jong Un</p>
                </div>
                <h1 className='text-2xl font-semibold'>400</h1>
            </div>
        </div>
        <h1 className='text-lg font-simple text-red-800 mt-10'>100 voter are not joined</h1>
        </div>
    )
}

export default ResultPage
