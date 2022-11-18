import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {content: 'Eke'}
]

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        nameAdded :(state, action)=> {
            state.push(action.payload)
        }
    }

})

export const {nameAdded} = nameSlice.actions

export default nameSlice.reducer