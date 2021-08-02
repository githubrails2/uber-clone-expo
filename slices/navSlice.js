import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        settravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }

    }
});

export const {  
setOrigin,setDestination,setTimeTravelInformation
} = navSlice.actions

export const selectOrigin = ({ nav }) => nav.origin;
export const selectDestination = ({ nav }) => nav.destination;
export const selectTimeTravelInfo = ({ nav }) => nav.timeTravelInformation;
export default navSlice.reducer