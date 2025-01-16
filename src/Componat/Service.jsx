import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Service() {

    const navigate = useNavigate()

    const gotodeafualt = () => {
        navigate("/")
    }
  return (
    <div>
        <h1>Service</h1>
        <button onClick={gotodeafualt}>Go to Deafualt</button>
    </div>
  )
}