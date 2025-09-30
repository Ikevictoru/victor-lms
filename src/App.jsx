
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ForgotPassword from "./pages/ForgotPassword";
import CheckEmail from "./pages/CheckEmail";
import Otp from "./pages/Otp"
import NewPassword from "./pages/newpassword"
import { Routes, Route } from "react-router-dom";
import Successful from "./pages/successful";


function App() {
  return (
    <main>
    <Routes>
     < Route path="/" element={<SignUp />} />
    < Route path="/signUp" element={<SignUp />} />
     < Route path="/signIn" element={<SignIn />} />
     < Route path="/ForgotPassword" element={<ForgotPassword />} />
     <Route path="/CheckEmail" element={<CheckEmail />} />
     <Route path="/Otp" element={<Otp />} />
     <Route path="/newpassword" element={<NewPassword/>} />
     <Route path="/successful" element={<Successful/>} />
    </Routes>
    </main>
  );
}

export default App;