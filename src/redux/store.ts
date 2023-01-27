import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import itensReducer from "./itens/itensSlice"
import modalReducer from "./modal/reducer"



export const store = configureStore({
    reducer:{
        itens: itensReducer,
        modal: modalReducer
    },
    middleware: [thunkMiddleware]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;