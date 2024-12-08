import { Link } from "react-router-dom"


const StartPage = () => {
  return (
    <div className="flex flex-col  w-full h-screen justify-center  items-center gap-10">
      <Link to={'/participate'}>
        <div className="bg-blue-600 font-semibold rounded-lg text-white w-[300px] mx-auto p-5 text-center">New Vote</div>
      </Link>
      <Link to={'/vote'}>
        <div className="bg-blue-600 font-semibold rounded-lg text-white w-[300px] mx-auto p-5 text-center">Join With A Code</div>
      </Link>
      <Link to={'/countdown'}>
        <div className="bg-blue-600 font-semibold rounded-lg text-white w-[300px] mx-auto p-5 text-center">Time Duration Set</div>
      </Link>
    </div >
  )
}

export default StartPage
