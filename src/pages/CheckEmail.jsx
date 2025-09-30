import logo from "../assets/log.png"
import { Link } from "react-router-dom"


function checkEmail() {
    return (
        <div className="flex flex-cl justify-center item min-screen bg-white pt-4">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6"> <img src={logo} alt="kota"/></div>
        <h2 className="font-bold text-2xl text-center"> Check your email</h2>
        <p className="text-center">we sent a password reset link to your email. Please check your inbox</p>
        
         <br />
         <Link to="/Otp">
            <button className='w-full text-white py-1 bg-blue-700 border rounded-lg '>open Email</button>
         </Link>
            <br />
             <div>
              <p className='mt-4 text-sm text-center'>Didn't received the email? {" "}  <Link to ='/CheckEmail' className='text-blue-600 hover:underline'>Resend</Link></p>
            </div>
    </div>
    </div>
    
    )
} 
 export default checkEmail;