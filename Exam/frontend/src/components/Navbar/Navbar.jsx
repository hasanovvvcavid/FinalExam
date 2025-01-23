import React, { useState } from 'react'
import { Link } from 'react-router'
import "./Navbar.scss"
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../pages/redux/features/productSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    const { basket } = useSelector((state) => state.basket)
    const [searchItem, setSearchItem] = useState('')

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        dispatch(search(searchTerm))
    }
    const [click, setClick] = useState(false)

    const totalbasket = basket.reduce((acc, item) => acc + item.count, 0)

    return (
        <div>
            <div className="header-section">

                <div className="header-content container">
                    <div className="logo">
                        <h1>Selling.</h1>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li ><Link to="/admin">Admin</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="extra-nav-links">
                        <input type="text" placeholder='Search' value={searchItem}
                            onChange={handleInputChange} />
                        <Link to="/basket">
                            <i class="bi bi-cart-fill"></i>
                            <sup>{totalbasket}</sup>
                        </Link>
                    </div>
                    <div className="burger">
                        <i onClick={()=> setClick(!click)} class="bi bi-list"></i>

                        {
                            click && <div className="burger-menu">
                                <div className="nav-links">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li ><Link to="/admin">Admin</Link></li>
                                        <li><Link>Blog</Link></li>
                                    </ul>
                                </div>
                                <div className="extra-nav-links">
                                    <input type="text" placeholder='Search' value={searchItem}
                                        onChange={handleInputChange} />
                                    <Link to="/basket">
                                        <i class="bi bi-cart-fill"></i>
                                        <sup>{totalbasket}</sup>
                                    </Link>
                                </div>
                            </div>
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar