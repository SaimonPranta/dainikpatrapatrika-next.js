import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'categories',
  initialState: {
    value: [],
  },
  reducers: {
    addCategories: (state, action) => {  
      state.value  = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addCategories } = counterSlice.actions

export default counterSlice.reducer