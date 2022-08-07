import {Route, Routes, Navigate} from 'react-router-dom'
import React from 'react'
import { MainPage } from './pages/MainPage'
import { BirdsPage } from './pages/BirdsPage'

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/birds" element={<BirdsPage />} />
            <Route path="/*" element = {<Navigate to="/" replace/>} />
        </Routes>
    )
}
