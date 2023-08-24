import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import todoSlice from './features/todoSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
})

export default store
