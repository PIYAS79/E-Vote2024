import { Link } from "react-router-dom"

const CountDownPage = () => {
    return (
        <div className="flex justify-center w-full h-screen  flex-col items-center">
            <h1 className="text-2xl font-bold">Set Time </h1>
            <h1 className="text-5xl font-bold mt-5 mb-40">00.00.00</h1>
            <Link to={'/vote'}>
                <button className="btn text-lg shadow-lg">Next</button>
            </Link>
        </div>
    )
}

export default CountDownPage
