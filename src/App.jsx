import { useState } from 'react'
import CategoryList from './components/CategoryList'
import EditCategory from './components/EditCategory'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCategory from './components/AddCategory'
import Elements from './components/Elements'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import Navbar from './components/Navbar'
import Login from './components/Login'


function App() {

  return (
    
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route>
    <Route path='/'
    element={<Login />}></Route>
    <Route path='/categories' element={<CategoryList />}></Route>
    <Route path='/editcategory/:id'
    element={<EditCategory />}></Route>
    <Route path='/addcategory' element={<AddCategory />}></Route>
    <Route path='/Elements/:id' element={<Elements />}></Route>
    <Route path='/addbook/:id' element={<AddBook />}></Route>
    <Route path='/editbook/:id' element={<EditBook />}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  
  )
}

export default App
