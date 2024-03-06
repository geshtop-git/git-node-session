import apiSlice from "../../app/apiSlice"

const basketApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getBaskets: build.query({
            query:()=>({
                url: '/api/baskets'
            }),
            providesTags: ["BasketList"]
        }),
        addBasket: build.mutation({
            query:(basket)=>({
                url:'/api/baskets',
                method:"POST",
                body: basket
            }),
            invalidatesTags:["BasketList"]
        }),
        deleteBasket: build.mutation({
            query:({id})=>({
                url:'/api/baskets',
                method:"DELETE",
                body: {id}
            }),
            invalidatesTags:["BasketList"]
        }),
    }),
  })
export const {
    useGetBasketsQuery,
    useAddBasketMutation,
    useDeleteBasketMutation
} = basketApiSlice