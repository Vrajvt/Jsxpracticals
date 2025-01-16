import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  const gotohome = () => {
    navigate("/home")
  }

  return (
    <div>
      <h1>yash</h1>
      <button onClick={gotohome}>Go to Home</button>
    </div>
  )
}