import React, { useEffect, useState } from 'react'
import userCreateContext from './CartContext'
import api from '../api/Axios'

export default function UserContextProvider({children}) {

    const [user, setUser] = useState(null)

    const getData = async () => {
        const data = await api.get('/users/me')
        setUser(data.data.findUser)
    }

    useEffect(() => {
      getData()
    },[])

    console.log(user)

  return (
    <userCreateContext.Provider value={{user, setUser}}>
        {children}
    </userCreateContext.Provider>
  )
}

