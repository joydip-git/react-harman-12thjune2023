import Link from 'next/link'
import { Product } from '../../models/product'
import React from 'react'

type ProductTablePropType = {
    products: Product[]
}
const ProductTable = ({ products }: ProductTablePropType) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(
                        (p) => {
                            return (
                                <tr key={p.productId}>
                                    <td>
                                        <Link href={`products/viewproduct/${p.productId}`}>
                                            <img src={p.imageUrl} alt="NA" title={p.productName} style={{ width: '80px', margin: '2px' }} />
                                        </Link>
                                    </td>
                                    <td>
                                        {p.productName}
                                    </td>
                                    <td>
                                        {p.price}
                                    </td>
                                    <td>
                                        {p.starRating}
                                    </td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default ProductTable