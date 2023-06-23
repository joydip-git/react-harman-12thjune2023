import { ApiResponse } from "../../../../models/apiresponse";
import { Product } from "../../../../models/product";
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
//import { useRouter } from "next/router";
import { useState } from "react";

type ViewProductPropType = {
    isLoading: boolean,
    errorMessage: string,
    product: Product | undefined
}
const ViewProduct = ({ isLoading, errorMessage, product }: ViewProductPropType) => {
    // const router = useRouter(); //useParams() => {id:1}
    // const paramObj = router.query; //{id:1}
    // const id = Number(paramObj.id)
    //return <div>View details of Product#{id}</div>
    const [errMsg, setErrMsg] = useState<string>(errorMessage)
    const [loading, setLoading] = useState<boolean>(isLoading)
    const [productData, setProductData] = useState<Product | undefined>(product)

    let design
    if (!loading) {
        design = <div>Loading</div>
    } else if (errMsg !== '') {
        design = <div>{errMsg}</div>
    } else if (!product) {
        design = <div>No records</div>
    } else {
        design = <div>{productData?.productName}</div>
    }
    return design
}
export default ViewProduct

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { 'id': '1' }
            },
            {
                params: { 'id': '2' }
            }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ViewProductPropType> = async ({ params }: Params) => {

    try {
        const resp = await fetch(`http://127.0.0.1:3003/products/${params.id}`)
        const responsedata = (await resp.json()) as ApiResponse<Product>
        return {
            props: {
                isLoading: true,
                errorMessage: '',
                product: responsedata.data
            }
        }
    } catch (error: any) {
        return {
            props: {
                isLoading: true,
                errorMessage: error.message,
                product: undefined
            }
        }
    }
}