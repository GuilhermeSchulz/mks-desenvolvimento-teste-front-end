
import {createSlice} from "@reduxjs/toolkit";


export interface ModalState {
    isOpen: boolean;
  }
  
  

  const modalSlice = createSlice({
    name: 'modal',
    initialState: { isOpen: false },
    reducers: {
      openModal: (state) => {
        state.isOpen = true;
      },
      closeModal: (state) => {
        state.isOpen = false;
      },
    },
  });

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
  