import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./Admin.scss";
import { addProduct, deleteProduct, highest, lowest } from "../redux/features/productSlice";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router";

const Admin = () => {
    const { errors, handleSubmit, values, handleChange, resetForm } = useFormik({
        initialValues: {
            image: '',
            title: '',
            category: '',
            price: '',
        },
        validationSchema: Yup.object().shape({
            image: Yup.string().required(),
            title: Yup.string().required(),
            category: Yup.string().required(),
            price: Yup.number().required().positive(),
        }),
        onSubmit: (values) => {
            dispatch(addProduct(values))
            resetForm()
            setOpen(false)
        },
    })

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    return (
        <div className="container">
            {
                open && <div className="form-div">
                    <h2>Creat Product</h2>
                    <form onSubmit={handleSubmit} action="">
                        {errors.image}
                        <input type="text" placeholder="Image" onChange={handleChange} value={values.image} name="image" />
                        {errors.title}
                        <input type="text" placeholder="Title" onChange={handleChange} value={values.title} name="title" />
                        {errors.category}
                        <input type="text" placeholder="Category" onChange={handleChange} value={values.category} name="category" />
                        {errors.price}
                        <input type="text" placeholder="Price" onChange={handleChange} value={values.price} name="price" />
                        <button className="btn btn-primary" type="submit">Creat</button>
                    </form>
                </div>
            }

            <div className="admin-header">
                <button onClick={()=> setOpen(!open)} className="btn btn-success">Creat</button>
                <button onClick={() => dispatch(highest())} className="btn btn-primary">Highest</button>
                <button onClick={() => dispatch(lowest())} className="btn btn-primary">Lowest</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((product) => (
                            <tr key={product._id}>
                                <td  onClick={()=>navigate(`/detail/${product._id}`)}>
                                    <img src={product?.image} alt="" />
                                </td>
                                <td>{product?.title}</td>
                                <td>{product?.category}</td>
                                <td>${product?.price}</td>
                                <td>
                                    <button
                                        onClick={() => dispatch(deleteProduct(product._id))}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;
