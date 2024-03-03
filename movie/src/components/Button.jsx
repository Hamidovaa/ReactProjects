import React from 'react'
import { useTheme } from './context/ThemeContext'

const Button = () => {
    const {theme, setTheme}=useTheme()
  return (
    <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>
         D/L
    </button>
  )
}

export default Button