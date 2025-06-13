import "../createISF.css"
import { info } from '../../../features/isf';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';


const ConsigneeData = () => {

    const dispatch = useDispatch();
    const isf = useSelector(e => e.isf.value);
    let isf1 = JSON.parse(JSON.stringify(isf))
    const [consigneeDataEntry, setconsigneeDataEntry] = useState({
        ...isf1.consigneeData
    });

    // console.log(consigneeDataEntry)

    const qualirfierTypeChange = (e) => {
            setconsigneeDataEntry((t) => ({ ...t, qualifierType: e.target.value }))
            isf1["consigneeData"]["qualifierType"] = e.target.value
            dispatch(info(isf1))
            console.log(isf)
        }

    const qualifierNoTypeChange = (e) => {
            setconsigneeDataEntry((t) => ({ ...t, qualifierNo: e.target.value }))
            isf1["consigneeData"]["qualifierNo"] = e.target.value
            dispatch(info(isf1))
            console.log(isf)
        }
    const nameTypeChange = (e) => {
            setconsigneeDataEntry((t) => ({ ...t, name: e.target.value }))
            isf1["consigneeData"]["name"] = e.target.value
            dispatch(info(isf1))
            console.log(isf)
        }

    return (
        <div>
            <fieldset >
                <legend>2. Consignee Data</legend>
                <div className="formContainer">
                    <div id="fieldsetinput">
                        <label htmlFor="consigneequalifier">Qualifier</label>
                        <select name="consigneequalifier" id="consigneequalifier" value={consigneeDataEntry.qualifierType} onChange={qualirfierTypeChange}>
                            <option  >
                                -------
                            </option>
                            <option value="irs_ein">
                                IRS/EIN
                            </option>
                            <option value="cbp_no">
                                CBP Assigned Number
                            </option>

                        </select>

                        <input type='text' name='consignee_qualifier' id='consignee_qualifier' value={consigneeDataEntry.qualifierNo} onChange={qualifierNoTypeChange}/>
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consigneeQualifierName">Name</label>
                        <input type='text' name='consigneeQualifierName' id='consigneeQualifierName' value={consigneeDataEntry.name} onChange={nameTypeChange}/>
                    </div>


                </div>

            </fieldset>
        </div>
    )

}

export default ConsigneeData;