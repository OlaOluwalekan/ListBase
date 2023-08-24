import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'
import { toast } from 'react-toastify'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/localStorage'

// FIREBASE CONFIGURATION
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

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  writeDialogIsOpen: false,
}

// SIGNUP USER
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (payload, thunkAPI) => {
    try {
      const resp = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      )
      // console.log(resp.user)
      return resp.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// SIGN IN USER
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, thunkAPI) => {
    try {
      const resp = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      )
      // console.log(resp.user)
      return resp.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null
      removeUserFromLocalStorage()
    },
    toggleWriteDialog: (state, { payload }) => {
      // console.log(payload)
      state.writeDialogIsOpen = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        addUserToLocalStorage(payload)
        toast.success('Registration successful')
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        if (payload.includes('weak-password')) {
          toast.error(payload.substring(10).substring(0, 40))
        } else if (payload.includes('in-use')) {
          toast.error(payload.split('/')[1].split(')')[0].split('-').join(' '))
        } else {
          toast(payload)
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        addUserToLocalStorage(payload)
        toast.success('Welcome back')
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload.split('/')[1].split(')')[0].split('-').join(' '))
      })
  },
})

export const { logOut, toggleWriteDialog } = userSlice.actions

export default userSlice.reducer
