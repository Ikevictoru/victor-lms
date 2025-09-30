import logo from "../assets/log.png"
import { Mail } from "lucide-react"
import { Link } from "react-router-dom"


function ForgotPassword() {
    return (
        <div className="flex flex-cl justify-center item min-screen bg-white pt-4">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6"> <img src={logo} alt="kota"/></div>
        <h2 className="font-bold text-2xl text-center"> Forgot Password</h2>
        <p className="text-center">Enter your email to continue.</p>
        
         <label className="p-2 mt-2 block">Email</label>
             <div className='relative'>
            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 '/>
            <input type="text"
            placeholder='Enter your email'
            className='w-full pl-10 p-2 border rounded-lg '/>
            </div>
             <br />
             <Link to="/checkEmail">
            <button className='w-full text-white py-1 bg-blue-700 border rounded-lg '>Forgot Password</button>
            </Link>
            <br />
            <br />
            <Link to="/signIn">
             <button className='w-full text-black py-1 bg-white-700 border rounded-lg '>Back to Sign In</button>
            </Link>
    </div>
    </div>
    
    )
} 
 export default ForgotPassword;