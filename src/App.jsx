
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
    <Routes>
     < Route path="/" element={<SignUp />} />
    < Route path="/signUp" element={<SignUp />} />
     < Route path="/signIn" element={<SignIn />} />
    </Routes>
    </main>
  );
}

export default App;