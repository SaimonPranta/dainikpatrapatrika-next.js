import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from "./categories/reducer"

export default configureStore({
  reducer: {
    categories: categoriesReducer
  },
})