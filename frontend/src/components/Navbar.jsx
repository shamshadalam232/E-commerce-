
import { Search, User, LogOut, Package, CircleHelp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import LOGO from '../assets/logo3.png'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const [useData, setUserData] = useState(null)

  const navigation = useNavigate()

  const fetchData = async () => {
    try {
      const data = await api.get('/users/me')
      setUserData(data.data.findUser)
    } catch (error) {
      setUserData(null)
    }
  }

  const handleLogout = async () => {
    try {
      await api.post('/users/logout')
      setUserData(null)
      navigation('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

    window.addEventListener('authChange', fetchData)

    return () => {
      window.removeEventListener('authChange', fetchData)
    }
  }, [])

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">

      {!useData ? (

        // =========================
        // GUEST NAVBAR
        // =========================

        <nav className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <div
            className="cursor-pointer"
            onClick={() => navigation('/')}
          >
            <img
              src={LOGO}
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8 text-sm font-medium text-gray-700">

            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
              <CircleHelp size={18} />
              <span>Help & Support</span>
            </div>

            <button
              onClick={() => navigation('/login')}
              className="hover:text-blue-600 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigation('/register')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition"
            >
              Register
            </button>

          </div>

        </nav>

      ) : (

        // =========================
        // LOGGED IN NAVBAR
        // =========================

        <nav className="h-20 max-w-7xl mx-auto px-6 flex items-center gap-8">

          {/* LOGO */}
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => navigation('/')}
          >
            <img
              src={LOGO}
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
          </div>


          {/* SEARCH */}
          <div className="flex-1 max-w-xl">

            <div className="relative">

              <input
                type="text"
                placeholder="Search for products..."
                className="
                  w-full
                  h-11
                  bg-gray-50
                  border
                  border-gray-300
                  rounded-lg
                  pl-4
                  pr-12
                  text-sm
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  transition
                "
              />

              <button
                className="
                  absolute
                  right-1
                  top-1
                  h-9
                  w-10
                  flex
                  items-center
                  justify-center
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  rounded-md
                  transition
                "
              >
                <Search size={18} />
              </button>

            </div>

          </div>


          {/* NAVIGATION */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-700">

            <button
              onClick={() => navigation('/')}
              className="hover:text-blue-600 transition"
            >
              Home
            </button>

            <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
              <Package size={18} />
              Track Order
            </button>


            {/* LANGUAGE */}
            <select
              className="
                bg-transparent
                outline-none
                cursor-pointer
                text-sm
                text-gray-700
              "
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Maithli</option>
            </select>


            {/* CURRENCY */}
            <select
              className="
                bg-transparent
                outline-none
                cursor-pointer
                text-sm
                text-gray-700
              "
            >
              <option>USD</option>
              <option>RUPEE</option>
              <option>TAKA</option>
            </select>


            {/* PROFILE */}
            <button
              onClick={() => navigation('/profile')}
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-lg
                hover:bg-gray-100
                transition
              "
            >
              <User size={18} />

              <span>Profile</span>
            </button>


            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="
                flex
                items-center
                gap-2
                bg-gray-900
                hover:bg-red-600
                text-white
                px-4
                py-2.5
                rounded-lg
                text-sm
                transition
                active:scale-95
              "
            >
              <LogOut size={17} />

              <span>Logout</span>
            </button>

          </div>

        </nav>

      )}

    </header>
  )
}

