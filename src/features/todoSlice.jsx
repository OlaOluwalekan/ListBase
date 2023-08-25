import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { toast } from 'react-toastify'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MSG_ID,
  appId: import.meta.env.VITE_APP_ID,
}

// FIREBASE APP INITIALIZATION
initializeApp(firebaseConfig)
// AUTH INITIALIZATION
const auth = getAuth()
// DATABASE REFERENCE
const db = getFirestore()
// COLLECTION REFERENCE
const collectionRef = collection(db, 'to-dos')

const initialState = {
  isLoading: false,
  toDos: [],
  todo: null,
}

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async (payload, thunkAPI) => {
    try {
      const resp = await addDoc(collectionRef, {
        ...payload,
        createdAt: serverTimestamp(),
        createdBy: thunkAPI.getState().user.user.uid,
      })
      return resp
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getTodos = createAsyncThunk(
  'todo/getTodos',
  async (payload, thunkAPI) => {
    // console.log(payload)
    // console.log(`'createdBy', '==', '4FNCQ0H2KgXh5D7OGcxHLwEGWyW2'`)
    try {
      let resp = await getDocs(
        query(
          collectionRef,
          where('createdBy', '==', payload.user),
          orderBy(payload.orderBy, payload.orderType)
        )
      )
      const todos = []
      resp.docs.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id })
      })
      // console.log(todos)
      return todos
      // return resp
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getAllTodos: (state, { payload }) => {
      state.toDos = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.todo = payload
        toast.success('Todo created successfully')
      })
      .addCase(createTodo.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.toDos = payload
        // console.log(payload)
        // toast.success('Todo created successfully')
      })
      .addCase(getTodos.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export const { getAllTodos } = todoSlice.actions

export default todoSlice.reducer
