import React from 'react'
import { useTheme } from '../context/ThemeContext'
import "../scss/button.scss"

const Button = () => {
    const {theme, setTheme}=useTheme()
  return (
    <button onClick={()=>setTheme(theme==="light"?"dark":"light")} >
         
    </button>
  )
}

export default Button