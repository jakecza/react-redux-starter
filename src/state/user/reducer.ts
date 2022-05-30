import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  address: string | undefined
  name: string
  profileImageUrl: string
  isLoggedIn: boolean
  token: string
  email: string
}

const initialState: UserState = {
  address: '',
  name: '',
  profileImageUrl: '',
  isLoggedIn: false,
  token: '',
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state: UserState, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUserLoggedIn: (state: UserState, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        localStorage.removeItem('token')
      }
      state.isLoggedIn = action.payload
    },
    logoutUser: () => {
      localStorage.removeItem('token')
      return {
        ...initialState,
      }
    },
    setUserEmail: (state: UserState, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setUserToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

export const { setUserName, setUserLoggedIn, setUserEmail, setUserToken, logoutUser } = userSlice.actions

export default userSlice.reducer
