
import { Link } from "react-router-dom"
import success from "../assets/illustration.png"

function Successful() {
   return(
     <div className="flex flex-cl justify-center item min-screen bg-white pt-4">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6"> <img src={success} alt="Success"/></div>
        <h2 className="font-bold text-2xl text-center"> Well Done! Your Password Change Sucessfully</h2>
        <p className="text-center">Always remember the password for your account at Kota Academy!</p>
        
         <br />
         <Link to="/signIn">
            <button className='w-full text-white py-1 bg-blue-700 border rounded-lg '>Back to sign In</button>
         </Link>
    </div>
    </div>
   )
}
export default Successful;