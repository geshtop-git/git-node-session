import apiSlice from "../../app/apiSlice"

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query:()=>({
                url: '/api/products'
            })
        }),
    }),
  })
export const {
    useGetProductsQuery,
} = productApiSlice