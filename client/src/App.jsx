import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About/>} />
      <Route path="/" element={<Signin/>} />
      <Route path="/" element={<SignUp/>} />
      <Route path="/" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}
