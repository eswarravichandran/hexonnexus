import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
        <ToastContainer position="top-center" autoClose={5000}/>
        <Navbar/>
        <Routes>
            <Route path='/' element={ <ProtectedRoutes><Home/></ProtectedRoutes> }/>
            <Route path='/login' element={ <Login/> }/>
        </Routes>
        <Footer/>
        </>
    )
}

export default App