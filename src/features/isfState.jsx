import { createSlice } from "@reduxjs/toolkit";

export const isfStateSlice = createSlice({
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
                qualirfier: "",
                name: ""
            },
            sellerData: {
                qualifier: "",
                name: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            },
            consolidator: {
                qualifier: "",
                name: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            },
            merchantData: {
                c_o: "",
                manufacturerSupplier: "",
                qualifier: "",
                name: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            }


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
export const { info } = isfStateSlice.actions;
export default isfStateSlice.reducer;