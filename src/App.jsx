import React from 'react'
import Navbar from './componat/Navbar'
// import Sidebar from './componat/Sidebar'
// import Counter from './componat/Counter'
// import Form2 from './componat/Form2'
// import Form3 from './componat/Componets-2/Form3'
// import Inputform from './componat/Componets-2/InputForm'
import Crud from './componat/Componets-2/Crud'
import Bootsrap from './Componat/Bootsrap'
import Home from './componat/Home'
import About from './Componat/About'
import { Route, Routes } from 'react-router'
import Default from './componat/Default'
import Service from './componat/Service'
import Login from './componat/Login'
import CommentSection from './componat/CommentSection'




function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
      {/* <Counter/> */}
      {/* <Form /> */}
      {/* <Form2/> */}
      {/* <Form3/> */}
      {/* <Inputform/> */}
      {/* <Crud/> */}
      {/* <Bootsrap/> */}
      {/* <CrudLocalStorage/> */}
      <CommentSection/>
      {/* <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
      </Routes> */}


    </div>
  )
}

export default App