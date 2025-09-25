import logo from '../assets/log.png'
import {User, Lock, Mail,} from "lucide-react"
import { Link } from 'react-router-dom'

function signUp() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white pt-20 ">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6"> <img src={logo} alt="kota"/></div>
         <h2 className="font-bold text-2xl text-center">Create Your Learner Account</h2>
         <p className="text-center">Sign up to access comprehensive LMS features</p>
        
            <label className="p-2 mt-2 block">Full Name</label>
            <div className='relative'>
            <User className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 '/>
            <input type="text"
            placeholder='Enter your full name'
            className='w-full pl-10 p-2 border rounded-lg '/>
            </div>
            
             <label className="p-2 mt-2 block">Email</label>
             <div className='relative'>
            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 '/>
            <input type="text"
            placeholder='Enter your email'
            className='w-full pl-10 p-2 border rounded-lg '/>
            </div>

             <label className="p-2 mt-2 block">Password</label>
             <div className='relative'>
            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 '/>
            <input type="text"
            placeholder='Enter your password'
            className='w-full pl-10 p-2 border rounded-lg '/>
            </div>
            <br />
            <button className='w-full text-white py-1 bg-blue-700 border rounded-lg '>Sign Up</button>
            <p className='flex items-center w-full py-6'>
                <span className='flex-grow border-t-2'></span>
                <span className='mx-4'>Or Sign Up With</span>
                <span className='flex-grow border-t-2'></span>
            </p>
            <div className='flex gap-4'>
                <button className='w-1/2 border p-2 rounded-lg'>Google</button>
                <button className='w-1/2 flex-1 border p-2 rounded-lg'>Facebook</button>
            </div>
            <div>
              <p className='mt-4 text-sm text-center'>Already have an account?{" "}  <Link to ='/signIn' className='text-blue-600 hover:underline'> sign in</Link></p>
            </div>
        </div>
        </div>
    )
}

export default signUp