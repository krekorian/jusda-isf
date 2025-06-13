import { createSlice } from "@reduxjs/toolkit";

export const isfSlice = createSlice({
    name: "isf",
    initialState: {
        value: {
            transportData: {
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
            },
            consigneeData: {
                qualifierType: "",
                qualifierNo: "",
                name: ""
            },
            sellerData: {
                qualifierType: "",
                qualifierNo: "",
                name: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            },
            consolidator: {
                qualifierType: "",
                qualifierNo: "",
                name: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            },
            merchantData: [{
                co: "",
                manufacturerSupplier: "",
                qualifierType: "",
                qualifierNo: "",
                name: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            }]


        },
    },
    reducers: {
        info: (state, action) => {
            console.log("action.payload ISF")
            console.log(action)
            state.value = action.payload;
        }
    },
});
export const { info } = isfSlice.actions;
export default isfSlice.reducer;