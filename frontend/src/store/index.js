import { configureStore, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state){
            localStorage.removeItem("userId")
            localStorage.removeItem("email")
            state.isLoggedIn = false
        },
    }
})

export const authAction = authSlice.actions

export const store = configureStore({reducer: authSlice.reducer})