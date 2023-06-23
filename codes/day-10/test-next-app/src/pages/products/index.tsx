import { NextPage } from "next"
import { useEffect, useState } from "react"
import { ApiResponse } from "../../models/apiresponse";
import { Product } from "../../models/product";
import ProductTable from "@/components/product-table/ProductTable";

import { GetStaticProps, } from "next";


/*
const ProductList: NextPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errMsg, setErrMsg] = useState<string>('')

    useEffect(
        () => {
            fetch('http://127.0.0.1:3003/products')
                .then(
                    (resp) => {
                        resp.json()
                            .then(
                                (responsedata) => {
                                    const apiResponse = responsedata as ApiResponse<Product[]>
                                    setErrMsg('')
                                    setLoading(true)
                                    setProducts(apiResponse.data)
                                },
                                (e) => {
                                    setErrMsg(e.message)
                                    setProducts([])
                                    setLoading(true)
                                }
                            )
                    },
                    (err: any) => {
                        setErrMsg(err.message)
                        setProducts([])
                        setLoading(true)
                    }
                )
        }
        , []
    )
    let design: any = ''
    if (!loading) {
        design = <div>Loading</div>
    } else if (errMsg !== '') {
        design = <div>{errMsg}</div>
    } else if (products.length === 0) {
        design = <div>No records</div>
    } else {
        design = (
            <ProductTable products={products} />
        )
    }

    return design
}
export default ProductList
*/
type ProductListPropType = {
    isLoading: boolean,
    errorMessage: string,
    products: Product[]
}
const ProductList = (props: ProductListPropType) => {
    const [products, setProducts] = useState<Product[]>(props.products)
    const [loading, setLoading] = useState<boolean>(props.isLoading)
    const [errMsg, setErrMsg] = useState<string>(props.errorMessage)

    let design
    if (!loading) {
        design = <div>Loading</div>
    } else if (errMsg !== '') {
        design = <div>{errMsg}</div>
    } else if (products.length === 0) {
        design = <div>No records</div>
    } else {
        design = (
            <ProductTable products={products} />
        )
    }
    return design
}
export default ProductList

//server side Next JS function, will be executed by Next JS server during build time nd prefetch some data
//the function must return an object, that Next JS will pass to the Page as property object
//then the page will be pre-rendered with pre-fecthed data
export const getStaticProps: GetStaticProps<ProductListPropType> = async () => {

    try {
        const resp = await fetch('http://127.0.0.1:3003/products')
        const responsedata = (await resp.json()) as ApiResponse<Product[]>
        return {
            props: {
                isLoading: true,
                errorMessage: '',
                products: responsedata.data
            }
        }
    } catch (error: any) {
        return {
            props: {
                isLoading: true,
                errorMessage: error.message,
                products: []
            }
        }
    }
}

