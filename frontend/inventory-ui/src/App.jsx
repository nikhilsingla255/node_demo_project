import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/common/Login'
import Register from './components/common/Register';
import ProtectedRoutes from './auth/ProtectedRoutes';
import DashboardRouter from './components/common/DashboardRouter'

function App() {

  return (
  // <Login />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" 
      element={<ProtectedRoutes>
          <DashboardRouter />
        </ProtectedRoutes>}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App
