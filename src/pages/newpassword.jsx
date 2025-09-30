import logo from "../assets/log.png"
import { Lock } from "lucide-react"
import { Link } from "react-router-dom"

function NewPassword() {
    return (
        <div className="flex flex-cl justify-center item min-screen bg-white pt-4">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6"> <img src={logo} alt="kota"/></div>
        <h2 className="font-bold text-2xl text-center"> Create a new password</h2>
        <p className="text-center">Set your new password with minimum 8 characters with a combination of letters and numbers</p>
        
         <label className="p-2 mt-2 block">New Password</label>
             <div className='relative'>
            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 '/>
            <input type="text"
            placeholder='********'
            className='w-full pl-10 p-2 border rounded-lg '/>
            </div>
            <label className="p-2 mt-2 block"> Confirmation New Password</label>
             <div className='relative'>
            <Lock  className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 '/>
            <input type="text"
            placeholder='********'
            className='w-full pl-10 p-2 border rounded-lg '/>
            </div>
            <br />
            <Link to="/successful">
             <button className='w-full text-white py-1 bg-blue-700 border rounded-lg '>Submit</button>
            </Link>
    </div>
    </div>
    )
}
export default NewPassword