import React, { useState } from 'react';
import "../createISF.css";
import { info } from '../../../features/isf';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const TransportData = () => {
    const dispatch = useDispatch();
    const isf = useSelector(e => e.isf.value);
    console.log("isf when transportdata is loaded");
    console.log(isf.transportData)
    let isf1 = JSON.parse(JSON.stringify(isf))
    const [transportDataEntry, settransportDataEntry] = useState({
        ...isf1.transportData
    });

    console.log(transportDataEntry)

    const validateMBL = (mbl) => {
        const mblEegex = /^\d{3}-\d{6}[0-6]$/
        return (mblEegex.test(mbl) ? true : false)
    }

    const checkdataStatus = (i) => {
        if (validateMBL(i.transportData.mbl)) {
            return ({
                mbl: true,
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
        } else {
            return ({
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
        }
    }

    const [dataStatus, setdataStatus] = useState(checkdataStatus(isf1))


    const mblChange = (e) => {

        console.log(`vstarting mblCHange ${e.target.value}`)

        if (validateMBL(e.target.value)) {
            // console.log("correct MBL");
            settransportDataEntry(t => {
                // console.log(t)
                // console.log(typeof (e.target.value))
                return { ...t, mbl: e.target.value }


            })
            setdataStatus(({ ...dataStatus, mbl: true }))
            // console.log("ISF under transport data")
            // console.log(isf)

            // console.log(isf1.transportData)
            // console.log(transportDataEntry)
            // console.log(Object.isExtensible(isf1.transportData))
            // console.log(Object.isFrozen(isf1.transportData))
            isf1["transportData"]["mbl"] = e.target.value
            // console.log(isf1)
            dispatch(info(isf1))
            // console.log(transportDataEntry.mbl)
            // console.log(`dataStatus ${dataStatus}`)
            // console.log(isf)




        } else {
            setdataStatus(({ ...dataStatus, mbl: false }))
            settransportDataEntry(t => { return { ...t, mbl: e.target.value } })
            console.log(dataStatus.mbl)
        }
    }

    const landingPortChange = (e) => {
        settransportDataEntry((t) => ({ ...t, landingPort: e.target.value }))
        isf1["transportData"]["landingPort"] = e.target.value
        dispatch(info(isf1))
    }

    const hblChange = (e) => {
        settransportDataEntry((t) => ({ ...t, hbl: e.target.value }))
        isf1["transportData"]["hbl"] = e.target.value
        dispatch(info(isf1))
    }
    const unloadingPortChange = (e) => {
        settransportDataEntry((t) => ({ ...t, unloadingPort: e.target.value }))
        isf1["transportData"]["unloadingPort"] = e.target.value
        dispatch(info(isf1))
    }
        const motChange = (e) => {
        settransportDataEntry((t) => ({ ...t, mot: e.target.value }))
        isf1["transportData"]["mot"] = e.target.value
        dispatch(info(isf1))
    }
        const shipmentTypeChange = (e) => {
        settransportDataEntry((t) => ({ ...t, shipmentType: e.target.value }))
        isf1["transportData"]["shipmentType"] = e.target.value
        dispatch(info(isf1))
    }
        const boardDateTypeChange = (e) => {
        settransportDataEntry((t) => ({ ...t, boardDate: e.target.value }))
        isf1["transportData"]["boardDate"] = e.target.value
        dispatch(info(isf1))
    }
        const etaTypeChange = (e) => {
        settransportDataEntry((t) => ({ ...t, eta: e.target.value }))
        isf1["transportData"]["eta"] = e.target.value
        dispatch(info(isf1))
    }
        const actionReasonCodeTypeChange = (e) => {
        settransportDataEntry((t) => ({ ...t, actionReasonCode: e.target.value }))
        isf1["transportData"]["actionReasonCode"] = e.target.value
        dispatch(info(isf1))
    }
        const poNumberTypeChange = (e) => {
        settransportDataEntry((t) => ({ ...t, poNumber: e.target.value }))
        isf1["transportData"]["poNumber"] = e.target.value
        dispatch(info(isf1))
    }

    return (
        <div>
            <fieldset className="fieldset">
                <legend>1. Transport Data</legend>


                <div className="formContainer">
                    <div className="input_wrap"  >
                        <label htmlFor="MBL_OBL" id={dataStatus.mbl ? "" : "inputboxerror"}>MBL/OBL#</label>
                        <input type='text' name='MBL_OBL' id='MBL_OBL' value={transportDataEntry.mbl} onChange={mblChange} />
                    </div>
                    <div className="landing Port" id="fieldsetinput">
                        <label htmlFor="landing_port">Landing Port</label>
                        <input type='text' name='landing_port' id='landing_port' onChange={landingPortChange} value={transportDataEntry.landingPort} />
                    </div>
                    <div className="input_wrap" id="fieldsetinput">
                        <label htmlFor="HBL">AMS Sent HBL#</label>
                        <input type='text' name='HBL' id='HBL' onChange={hblChange} value={transportDataEntry.hbl} />
                    </div>
                    <div className="unloading Port" id="fieldsetinput">
                        <label htmlFor="unloading_port">Unloanding Port</label>
                        <input type='text' name='unloading_port' id='unloading_port' onChange={unloadingPortChange} value={transportDataEntry.unloadingPort} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="MOT">MOT</label>
                        <select name="MOT" id="MOT" onChange={motChange} value={transportDataEntry.mot}>
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
                        <select name="shipment_type" id="shipment_type" onChange={shipmentTypeChange} value={transportDataEntry.shipmentType}>
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
                        onChange={boardDateTypeChange} value={transportDataEntry.boardDate}
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
                        onChange={etaTypeChange} value={transportDataEntry.eta}
                    />
                </div>
                <div id="fieldsetinput">
                    <label htmlFor="actionReasonCode">Action Reason Code</label>
                    <select name="actionReasonCode" id="actionReasonCode" onChange={actionReasonCodeTypeChange} value={transportDataEntry.actionReasonCode}>
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
                    <input type='text' name='poNo' id='poNo' onChange={poNumberTypeChange} value={transportDataEntry.poNumber}/>
                </div>
            </fieldset>
        </div >
    )
}
export default TransportData;