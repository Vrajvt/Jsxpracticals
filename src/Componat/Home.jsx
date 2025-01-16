import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const gotoAbout = () => {
    navigate("/about")
  }

  return (
    <div>
      <h1>I Am Home</h1>
      <button onClick={gotoAbout}> Go To About</button>
    </div>
  )
}