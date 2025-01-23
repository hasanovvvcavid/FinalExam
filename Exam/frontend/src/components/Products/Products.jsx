import React, { useEffect } from 'react'
import Card from '../Card/Card'
import "./Products.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../pages/redux/features/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    console.log(products);


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            <div className="products-section">
                <div className="products-content container">
                    <div className="content-title col-lg-5">
                        <h3>POPULAR PRODUCTS</h3>
                        <h2>Our Products</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                    </div>
                    <div className="content-cards">
                        {
                            products && products.map((product) => (
                                <Card key={product._id} product={product} />

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products