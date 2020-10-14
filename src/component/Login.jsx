import React, { Fragment, useState } from 'react'
import lock from '../img/lock.png'
import user from '../img/user.png'
import '../App.css'
import Swal from 'sweetalert2'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'

const Login = props => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confpass, setConfPass] = useState('')
  const [error, setError] = useState(null)
  const [esRegistro, setEsRegistro] = useState(false)

  const noemail = () => {
    Swal.fire({
      icon: 'error',
      title: 'Ingrese Email',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const nopass = () => {
    Swal.fire({
      icon: 'error',
      title: 'Ingrese Password',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const passmenor = () => {
    Swal.fire({
      icon: 'error',
      title: 'Minimo 6 Caracteres',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const valiPass = () => {
    Swal.fire({
      icon: 'error',
      title: 'Es diferente el passwor',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const noRegEmail = () => {
    Swal.fire({
      icon: 'error',
      title: 'Usuario no valido',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const noRegPass = () => {
    Swal.fire({
      icon: 'error',
      title: 'Incorrecta la contaseña',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const noUser = () => {
    Swal.fire({
      icon: 'error',
      title: 'El Usuario No existe',
      showConfirmButton: false,
      timer: 1500
    })
  }

  // verificación de input vacios

  const procesarDatos = e => {
    e.preventDefault()

    if (!email.trim()) {
      //   console.log('Ingrese Email')
      noemail()
      return
    }
    if (!pass.trim()) {
      //   console.log('Ingrese pasword')
      nopass()
      return
    }

    if (pass.length < 6) {
      //   console.log('el passwor debe ser mayor a 6 digitos')
      passmenor()
      return
    }

    setError(null)

    if (esRegistro) {
      verificar()
      registrar()
      return
    } else {
      login()
    }
  }

  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass)
      console.log(res.user)
      setEmail('')
      setPass('')
      setError(null)

      props.history.push('/admin')
    } catch (error) {
      console.log(error)

      if (error.code === 'auth/invalid-email') {
        noRegEmail()
      }

      if (error.code === 'auth/wrong-password') {
        noRegPass()
      }

      if (error.code === 'auth/user-not-found') {
        noUser()
      }
    }
  }, [email, pass, props.history])

  const verificar = () => {
    if (pass !== confpass) {
      //   console.log('es diferente el password')
      valiPass()
      return
    }
  }

  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, confpass)
      await db
        .collection('usuarios')
        .doc(res.user.email)
        .set({
          email: res.user.email,
          uid: res.user.uid
        })

      await db.collection(res.user.uid).add({
        btc: 0.0,
        eth: 0.0,
        usd: 0.0,
        mxn: 0.0,
        otros: 0.0
      })

      setEmail('')
      setPass('')
      setError(null)

      props.history.push('/admin')
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/invalid-email') {
        setError('Email no válido')
      }
      if (error.code === 'auth/email-already-in-use') {
        setError('El email ya esta registrado')
      }

      if (error.code === 'auth/weak-password') {
        setError('El password no es igual')
      }
    }
  }, [email, confpass, props.history])

  return (
    <Fragment>
      <section>
        <div className='box'>
          <div className='form'>
            <h5>{esRegistro ? 'Registro de Usuario' : 'Login de Acceso'}</h5>
            <form onSubmit={procesarDatos}>
              {error && <div className='alert alert-danger'>{error}</div>}
              <div className='inputBx'>
                <input
                  type='email'
                  placeholder='Email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                <img src={user} alt='' />
              </div>
              <div className='inputBx'>
                <input
                  type='password'
                  placeholder='Password'
                  onChange={e => setPass(e.target.value)}
                  value={pass}
                />
                <img src={lock} alt='' />
              </div>
              {esRegistro ? (
                <div className='inputBx'>
                  <input
                    type='password'
                    placeholder='Confir Password'
                    onChange={e => setConfPass(e.target.value)}
                    value={confpass}
                  />
                  <img src={lock} alt='' />
                </div>
              ) : (
                ''
              )}

              <label className='remeber'>
                <input type='checkbox' />
                Remanber
              </label>
              <div className='inputBx'>
                <input
                  type='submit'
                  value={esRegistro ? 'Registrase' : 'Acceder'}
                />
              </div>
            </form>
            <p>ForgetPassword</p>
            <p onClick={() => setEsRegistro(!esRegistro)}>
              {esRegistro ? '¿ Ya estas registrado' : '¿No tienes cuenta?'}
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default withRouter(Login)
