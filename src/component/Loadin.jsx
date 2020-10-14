import React, { useState } from 'react'
import '../App.css'

const [carga, setCarga] = useState(0)

const Loadin = () => {
  window.onload = () => {
    setTimeout(function () {
      loader.style.opacity = '0'
      setTimeout(function () {
        loader.style.display = 'none'
      }, 1800)
    }, 1800)
  }

  return <div class='loader'></div>
}

export default Loadin
