import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    type: "",
    message: "",
};

const pageAlertSlice = createSlice({
    name: "pageAlert",
    initialState,
    reducers: {
        setPageAlert: (state, action) => {
            state.value = action.payload.value;
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
    },
});

export const { setPageAlert } = pageAlertSlice.actions;

export const pageAlertSelector = createSelector(
    (state) => state.pageAlert,
    (state) => state
);

export default pageAlertSlice.reducer;
