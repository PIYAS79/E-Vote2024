import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";



const ParticipatePage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen gap-20">
            <h1 className="text-2xl font-bold text-red-900 ">Candidate Name Please</h1>
            <input type="text" placeholder="Enter Name" className="border w-[270px] p-2 rounded-lg" />
            <p className="-mt-10 text-4xl "><AiOutlinePlus /></p>
            <div className="relative w-full flex flex-col justify-center items-center ">
                <Link to={'/countdown'}>
                    <button className="btn text-lg shadow-lg">Next</button>
                </Link>
                <p className="mt-5 mb-2">share vote</p>
                <div className="text-4xl"><AiOutlineShareAlt /></div>
            </div>
        </div>
    )
}

export default ParticipatePage
