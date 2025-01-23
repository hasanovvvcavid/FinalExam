import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import "./Detail.scss"
import { addBasket } from '../redux/features/basketSlice'

const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {basket}= useSelector((state) => state.basket)

    const {products} = useSelector((state) => state.products)

    const product = products.find((product) => product._id === id)
  return (
    <div>
        <div className="detail-section">
            <div className="detail-content container">
                <div className="content-image col-lg-4">
                    <img src={product?.image} alt="" />
                </div>
                <div className="content-description col-lg-4">
                    <div className="content-title">
                        <h2>{product?.title} </h2>
                    </div>
                    <div className="content-category">
                        <p>Category : {product?.category} </p>
                    </div>
                    <div className="content-price">
                        <p>Price : ${product?.price} </p>
                    </div>
                    <div className="basket-btn">
                        <button onClick={()=> dispatch(addBasket(product))} className='btn btn-primary'>Add To basket</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail