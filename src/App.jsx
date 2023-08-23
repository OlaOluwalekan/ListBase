import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './pages/dashboard/ProtectedRoute'

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='auth/register' element={<Register />} />
            <Route path='auth/login' element={<Login />} />
            <Route
              path='dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>

        <ToastContainer
          autoClose={2000}
          position='bottom-left'
          pauseOnFocusLoss={false}
        />
      </BrowserRouter>
    </main>
  )
}
export default App
