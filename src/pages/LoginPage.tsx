import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <form className="max-w-[300px] mx-auto flex flex-col justify-center items-center w-full h-screen">
            <h1 className="text-3xl font-bold mb-5">LOGIN PAGE</h1>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Enter Your National ID</span>
                </label>
                <input
                    type="email"
                    placeholder="NID"
                    className="input input-bordered"
                    required
                />
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Create Password</span>
                </label>
                <input
                    type="email"
                    placeholder="password"
                    className="input input-bordered"
                    required
                />
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Re-Write Password</span>
                </label>
                <input
                    type="email"
                    placeholder="rewrite password"
                    className="input input-bordered"
                    required
                />
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Enter Phone Number</span>
                </label>
                <input
                    type="email"
                    placeholder="phone"
                    className="input input-bordered"
                    required
                />
            </div>
            <Link to={'/start'} className="w-full">
                <div className="form-control mt-6 w-full">
                    <button type="submit" className="btn bg-white shadow-lg">LOGIN NOW</button>
                </div>
            </Link>
        </form>
    )
}

export default LoginPage
