import { Route, RouteObject, Routes, useRoutes } from 'react-router-dom'
import Home from '../components/common/home/Home'
import PageNotFound from '../components/common/page-not-found/PageNotFound'
import ProductList from '../components/products/product-list/ProductList'
import AddProduct from '../components/products/add-product/AddProduct'
import ViewProduct from '../components/products/view-product/ViewProduct'
import EditProduct from '../components/products/edit-product/EditProduct'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='products'>
                <Route path='' element={<ProductList />} />
                <Route path='add' element={<AddProduct />} />
                <Route path='view/:id' element={<ViewProduct />} />
                <Route path='edit/:id' element={<EditProduct />} />

            </Route>
            <Route path=''>
                <Route path='home' element={<Home />} />
                <Route path='' element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    )

}

export default AppRoutes