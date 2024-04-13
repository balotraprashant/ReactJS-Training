import { createSlice } from '@reduxjs/toolkit';
import userData from '../users.json';

// const initialState = {
//     currentUser: null,
//     error: null,
// };

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
    users: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password, navigate } = action.payload;
            state.users = [...userData.users, ...state.users];
            const user = state.users.find(user => user.email === email && user.password === password);
            if (user) {
                state.isAuthenticated = true;
                state.user = user;
                state.error = null;
                navigate('/');
            } else {
                state.isAuthenticated = false;
                state.user = null;
                state.error = 'Invalid username or password';
            }
        },
        signup: (state, action) => {
            const { user, navigate } = action.payload;
            if (user) {
                state.isAuthenticated = false;
                state.users.push(user);
                state.user = null;
                state.error = null;
                navigate('/login');
            } else {
                state.isAuthenticated = false;
                state.user = null;
                state.error = 'Invalid user details';
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        }
    }
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;