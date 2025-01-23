import React from 'react'
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./Basket.scss"
import { deleteBasket } from '../redux/features/basketSlice';
import { useNavigate } from 'react-router';

const Basket = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { basket } = useSelector((state) => state.basket)
    const totalbasket = basket.reduce((acc, item) => acc + item.count * item.price, 0)
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket && basket.map((product) => (
                            <tr key={product._id}>
                                <td  onClick={()=>navigate(`/detail/${product._id}`)}><img src={product?.image} alt="" /></td>
                                <td>{product?.title}</td>
                                <td>{product?.category}</td>
                                <td>{product?.count}</td>
                                <td>${product?.price * product.count}</td>
                                <td><button onClick={()=> dispatch(deleteBasket(product._id))} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
            <h2>Total: ${totalbasket}</h2>
        </div>
    )
}

export default Basket