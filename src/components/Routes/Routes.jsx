import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Home/Home'
import { ROUTES } from '../../utils/routes'
import Product from '../Products/Product'
import Profile from '../Profile/Profile'
import Category from '../Categories/Category'
import Cart from '../Cart/Cart'

const AppRoutes = () => {
    return <>
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.PROFIFLE} element={<Profile />} />
            <Route path={ROUTES.CATEGORY} element={<Category />} />
            <Route path={ROUTES.CART} element={<Cart />} />
        </Routes>
    </>
}

export default AppRoutes