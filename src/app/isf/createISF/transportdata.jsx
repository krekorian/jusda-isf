import React, { useState } from 'react';
import "../createISF.css"

const TransportData = () => {
    const [transportData, settransportData] = useState({
        mbl: "",
        landingPort: "",
        hbl: "",
        unloadingPort: "",
        mot: "",
        shipmentType: "",
        boardDate: "",
        eta: "",
        actionReasonCode: "",
        poNumber: ""
    });

    const [dataStatus, setdataStatus] = useState({
        mbl: false,
        landingPort: false,
        hbl: false,
        unloadingPort: false,
        mot: false,
        shipmentType: false,
        boardDate: false,
        eta: false,
        actionReasonCode: false,
        poNumber: false,
    })



    const mblChange = (e) => {
        console.log(e.target.value)
        const mblEegex = /^\d{3}-\d{6}[0-6]$/
        if (mblEegex.test(e.target.value)) {
            // console.log("correct MBL");
            settransportData(t => {
                console.log(t)
                // console.log(typeof (e.target.value))
                return { ...t, mbl: e.target.value }


            })
            setdataStatus(({ ...dataStatus, mbl: e.target.value }))
            console.log(transportData)

        } else {
            console.log(dataStatus.mbl)
        }
    }

    return (
        <div>
            <fieldset className="fieldset">
                <legend>1. Transport Data</legend>


                <div className="formContainer">
                    <div className="input_wrap"  >
                        <label htmlFor="MBL_OBL" id={dataStatus.mbl ? "" : "inputboxerror"}>MBL/OBL#</label>
                        <input type='text' name='MBL_OBL' id='MBL_OBL' onChange={mblChange} />
                    </div>
                    <div className="landing Port" id="fieldsetinput">
                        <label htmlFor="landing_port">Landing Port</label>
                        <input type='text' name='landing_port' id='landing_port' />
                    </div>
                    <div className="input_wrap" id="fieldsetinput">
                        <label htmlFor="HBL">AMS Sent HBL#</label>
                        <input type='text' name='HBL' id='HBL' />
                    </div>
                    <div className="unloading Port" id="fieldsetinput">
                        <label htmlFor="unloading_port">Unloanding Port</label>
                        <input type='text' name='unloading_port' id='unloading_port' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="MOT">MOT</label>
                        <select name="MOT" id="MOT">
                            <option value="containerized">
                                Containerized
                            </option>
                            <option value="non-containerized">
                                Non-Containerized
                            </option>
                        </select>
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="shipment_type">Shipment Type</label>
                        <select name="shipment_type" id="shipment_type">
                            <option value="standardRegular">
                                01 Standard/Regular filings
                            </option>
                            <option value="toOrderShipments">
                                02 To Order Shipments
                            </option>
                            <option value="houseHoldGoods">
                                03 Household Goods/Personal Effects
                            </option>
                            <option value="militaryGovernment">
                                04 Military and Government
                            </option>
                            <option value="diplomaticShipment">
                                05 Diplomatic Shipment
                            </option>
                            <option value="carnet">
                                06 Carnet
                            </option>
                            <option value="usReturnedGoods">
                                07 US Returned Goods
                            </option>
                            <option value="ftzShipments">
                                08 FTZ Shipments
                            </option>
                            <option value="intlMailShipments">
                                09 International Mail Shipments
                            </option>
                            <option value="outerContinental">
                                10 Outer Continental Shelf Shipments
                            </option>
                            <option value="informal">
                                11 Informal
                            </option>
                        </select>
                    </div>

                </div>
                <div id="fieldsetinput">
                    <label htmlFor='onboardDate'>
                        OnBoard Date
                    </label>
                    <input
                        type="date"
                        id="onboardDate"
                        name="isf-onboardDate"
                    />
                </div>
                <div id="fieldsetinput">
                    <label htmlFor='ETA'>
                        ETA
                    </label>
                    <input
                        type="date"
                        id="ETA"
                        name="isf-ETA"
                    />
                </div>
                <div id="fieldsetinput">
                    <label htmlFor="actionReasonCode">Action Reason Code</label>
                    <select name="actionReasonCode" id="actionReasonCode">
                        <option value="complianceTransaction">
                            Compliance Transaction
                        </option>
                        <option value="flexibleRange">
                            Flexible Range
                        </option>
                        <option value="flexibleTiming">
                            Flexible Timing
                        </option>
                        <option value="flexibleRangeTiming">
                            Flexible Range & Flexible Timing
                        </option>
                    </select>
                </div>
                <div className="input_wrap" id="fieldsetinput" >
                    <label htmlFor="poNo">P.O. No.</label>
                    <input type='text' name='poNo' id='poNo' />
                </div>
            </fieldset>
        </div >
    )
}
export default TransportData;