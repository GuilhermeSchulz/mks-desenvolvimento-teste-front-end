import { RootState } from "./../store";
import { createAsyncThunk,createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { getAllItens } from "../../services/api";

export interface iItens {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  quantity?: number;
  photo: string;
}

export interface iCartItens {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    quantity: number;
    photo:string;
}
export interface iItensState {
  itens: iItens[];
  cartItens: iCartItens[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: iItensState = {
  itens: [],
  cartItens:[],
  loading: false,
  error: false,
  errorMessage: "",
};
export const fetchAllItens = createAsyncThunk("itens/fetchAllItens", async () =>{
    const response = await getAllItens()
    return response
}) as any
export const addCartItens = createAction<iItens>("itens/AddCartItens");
export const increaseCartItemQuantity = createAction<number>("itens/AddCartItemQuantity");
export const removeCartItem = createAction<number>("itens/removeCartItem");
export const removeCartAllSameItem = createAction<number>("itens/removeCartItemAllQuantity");
export const itensSlice = createSlice({
  
  name: "itens",
  initialState,
  reducers: {
        AddCartItens: (state, action: PayloadAction<iCartItens>) => {
          state.cartItens.push(action.payload);},
        AddCartItemQuantity: (state, action: PayloadAction<number>) => {
            const idx = state.cartItens.findIndex((item) => item.id === action.payload);
            if (idx !== -1) {
              state.cartItens[idx] = {...state.cartItens[idx], quantity: state.cartItens[idx].quantity += 1};
              }
          },
          removeCartItem: (state, action: PayloadAction<number>) => {
            const idx = state.cartItens.findIndex((item) => item.id === action.payload);
            if (idx !== -1) {
              state.cartItens[idx] = {...state.cartItens[idx], quantity: state.cartItens[idx].quantity -= 1};
              if(state.cartItens[idx].quantity < 1){

                state.cartItens.splice(idx, 1);
              }
            }
        },
        removeCartItemAllQuantity: (state, action: PayloadAction<number>) => {
          const idx = state.cartItens.findIndex((item) => item.id === action.payload);
          if (idx !== -1) {
              state.cartItens.splice(idx, 1);
          }
      },
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchAllItens.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAllItens.fulfilled, (state, action) => {
                state.loading = false
                const data : iItens[] = action.payload.data.products
                state.itens = data
            })
            .addCase(fetchAllItens.rejected, (state) => {
                state.loading = false
                state.error = true
                state.errorMessage = "Error"    
            })
    }
});

export const selectItens = (state:RootState) => state.itens.itens

export default itensSlice.reducer    

