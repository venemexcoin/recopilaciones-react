import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const Saldo = props => {
  const [saldo, setSaldo] = useState([])

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await db.collection(props.saldos.uid).get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        // console.log(arrayData)
        setSaldo(arrayData)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerDatos()
  }, [])

  return (
    <div>
      {saldo.map((item, index) => (
        <label key={index}>saldo {item.mxn} $</label>
      ))}
    </div>
  )
}

export default Saldo
