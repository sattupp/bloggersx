// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import About from "./pages/About"
// import Home from "./pages/Home"
// import SignIn from "./pages/SignIn"
// import SignUp from "./pages/SignUp"
// import Dashboard from "./pages/Dashboard"
// import Projects from "./pages/Projects"
// import Header from './components/Header'


// export default function App() {
//   return (
//     // <h1 className='3xl'>App</h1>
//     <BrowserRouter>
//     {/* we need to add header outside this Routes but inside the browser router to be able to have it in all pages */}
//     <Header />

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/sign-in" element={<SignIn />} />
//       <Route path="/sign-up" element={<SignUp />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/projects" element={<Projects/>} />
//     </Routes>



//     </BrowserRouter>
//   )
// }
 


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
        
    </BrowserRouter>
  )
}
