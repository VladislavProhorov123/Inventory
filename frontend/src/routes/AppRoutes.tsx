import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Menu from '../pages/Menu'
import Home from '../pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='menu' element={<Menu />} />
      </Route>
    </Routes>
  )
}
