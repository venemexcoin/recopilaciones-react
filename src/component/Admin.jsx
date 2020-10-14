import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'
import Menu from './Menu'

const Admin = props => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (auth.currentUser) {
      // console.log('exciste un usuario')
      setUser(auth.currentUser)
    } else {
      // console.log('no existe el usuario')
      props.history.push('/login')
    }
  }, [props.history])

  return (
    <div>
      {user && <p>{user.email}</p>}
      <Menu />
    </div>
  )
}

export default withRouter(Admin)
