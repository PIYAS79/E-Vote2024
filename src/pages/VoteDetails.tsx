import { Link } from 'react-router-dom'
import Winner from '../assets/Winner.png'

const VoteDetails = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen flex-col'>
      <img src={Winner} alt="" />
      <Link to={'/result'}>
      <h1 className='bg-gray-200 font-bold text-xl p-2 px-5 mt-8 mb-3 rounded-lg'>Vote Details</h1>
      </Link>
      <h1 className='text-green-500 text-3xl font-bold my-2'>Winner</h1>
      <h1 className='text-black font-bold text-xl'>Name : Md. Kazi Rasel</h1>
      <h1 className='text-red-500 font-bold text-xl'>Total Vote : 10,000</h1>
      <h1 className='text-orange-500 font-bold text-xl'>He Got : 9,000</h1>

    </div>
  )
}

export default VoteDetails
