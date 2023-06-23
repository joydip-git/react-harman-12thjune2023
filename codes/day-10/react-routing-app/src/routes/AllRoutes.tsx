import { RouteObject } from "react-router-dom"
import Home from "../components/common/home/Home"
import PageNotFound from "../components/common/page-not-found/PageNotFound"
import ProductList from "../components/products/product-list/ProductList"
import AddProduct from "../components/products/add-product/AddProduct"
import ViewProduct from "../components/products/view-product/ViewProduct"
import EditProduct from "../components/products/edit-product/EditProduct"

const AllRoutes = () => {
    const commonRoutes: RouteObject = {
        path: '',
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: '',
                element: <Home />
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    }


    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            {
                path: '',
                element: <ProductList />
            },
            {
                path: 'add',
                element: <AddProduct />
            },
            {
                path: 'view/:id',
                element: <ViewProduct />
            },
            {
                path: 'edit/:id',
                element: <EditProduct />
            },
        ]
    }
    return [productRoutes, commonRoutes]
}

export default AllRoutes