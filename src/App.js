import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Topbar from './components/Topbar';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import Write from './pages/Write';

export default function App() {
  return (
    <div className='app'>
        <Topbar />
        <Navbar />
        <Dropdown />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/write' element={<Write/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/posts/id' element={<SinglePost />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Newsletter />
        <Footer />

    </div>
  )
}
