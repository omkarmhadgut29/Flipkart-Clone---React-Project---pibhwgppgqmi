import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            delete state.user;
        },
    },
});

export const { addUser, deleteUser } = userSlice.actions;

export const userSelector = createSelector(
    (state) => state.user?.user || null,
    (state) => state
);

export default userSlice.reducer;
