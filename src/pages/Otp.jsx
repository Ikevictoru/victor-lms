  import logo from "../assets/log.png"
  import { Link } from "react-router-dom"

function Otp() {
 return (

 <div className="flex flex-cl justify-center item min-screen bg-white pt-4">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6"> <img src={logo} alt="kota"/></div>
        <h2 className="font-bold text-2xl text-center"> OTP Verification</h2>
        <p className="text-center">we have sent a verification code to your email Ikevictoru@gmail.com <Link to ='/ForgotPassword' className='text-blue-600 hover:underline'>Wrong email?</Link></p>
        
         <br />
         <Link to="/newpassword">
            <button className='w-full text-white py-1 bg-blue-700 border rounded-lg '>Submit</button>
         </Link>
            <br />
             <div>
              <p className='mt-4 text-sm text-center'>Didn't received the email? {" "}  <Link to ='/Otp' className='text-blue-600 hover:underline'>Resend</Link></p>
            </div>
    </div>
    </div>
    
    )
} 
 export default Otp;