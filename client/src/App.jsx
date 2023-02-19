import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import EditorView from './pages/EditorView'
import NoteView from './pages/NoteView'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit" element={<EditorView />} />
        <Route path="/view" element={<NoteView />} />
      </Routes>
    </>
  )
}

export default App
