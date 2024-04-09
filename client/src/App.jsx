import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"

export default function App() {
  return (
    // <h1 className='3xl'>App</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/gharja" element={<ghar/>} />
    </Routes>



    </BrowserRouter>
  )
}
 