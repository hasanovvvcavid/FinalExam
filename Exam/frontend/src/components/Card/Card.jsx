import React from 'react'
import "./Card.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../pages/redux/features/basketSlice'
import { useNavigate } from 'react-router'

const Card = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {basket} = useSelector((state) => state.basket)
    return (
        <div>
            <div className="product-card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={product?.image} alt="" />
                    </div>
                    <div className="content-description">
                        <div className="card-title">
                            <h5>{product?.title}</h5>
                        </div>
                        <div className="card-rating">
                            <i class="bi bi-star-fill"></i> 5.0 <i id='heart' class="bi bi-heart-fill"></i> 22
                        </div>
                        <p>{product?.category}</p>
                        <span>${product?.price}</span>
                        <div className="card-buttons">
                            <button onClick={()=>dispatch(addBasket(product)) } className='btn btn-dark'>Add basket</button>
                            <button onClick={()=>navigate(`/detail/${product._id}`)} className='btn btn-dark'>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card