import React, { useEffect } from 'react'
import { HeaderPage } from '../../components/Admin';
import { useUser } from '../../hooks'
export const UsersAdmin = () => {
  const {loading,users,getUsers} = useUser();
  console.log('loading..',loading)
  console.log('users',users);

  useEffect(() => {
    getUsers()
  }, [])
  

  return (

    <>
      <HeaderPage title="Usuarios"/>
      <h1>User Admin</h1>

    </>
  )
}
