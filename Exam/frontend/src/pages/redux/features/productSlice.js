import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const BASE_URL = "http://localhost:3000/products"

const initialState = {
    products: [],
    allProducts: [],

}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const { data } = await axios.get(BASE_URL)
    return data.products
})
export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const { data } = await axios.post(BASE_URL, product)
    return data
})
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    const { data } = await axios.delete(`${BASE_URL}/${id}`)
    return data
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        highest: (state, action) => {
            state.products = state.products.sort((a, b) => b.price - a.price)
        },
        lowest: (state, action) => {
            state.products = state.products.sort((a, b) => a.price - b.price)
        },
        search: (state, action) => {
            state.products = state.allProducts.filter((product) => product.title.toLowerCase().includes(action.payload.trim().toLowerCase()))
        }

    },
    extraReducers(builder) {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.allProducts = action.payload
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push({ ...action.payload })
                state.allProducts.push({ ...action.payload })
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product._id !== action.payload._id)
            })

    }
})
export const { lowest, highest,search } = productSlice.actions;
export default productSlice.reducer;