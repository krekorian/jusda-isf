import { createSlice } from "@reduxjs/toolkit";

export const transportDataSlice = createSlice({
    name: "transportData",
    initialState: {
        value: {
            mbl: "",
            landingPort: "",
            hbl: "",
            unloadingPort: "",
            mot: "",
            shipmentType: "",
            onboardDate: "",
            eta: "",
            actionReasonCode: "",
            poNo: ""
        }
    },
    reducers: {
        transportDataInfo: (state, action) => {
            console.log("action.payload transportData")
            console.log(action)

        }
    }

})

export const { transportDataInfo } = transportDataSlice.actions;
export default transportDataSlice.reducer;