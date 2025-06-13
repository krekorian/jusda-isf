import "../createISF.css";
import { info } from '../../../features/isf';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ConsolidatorData = () => {

    const dispatch = useDispatch();
    const isf = useSelector(e => e.isf.value);
    let isf1 = JSON.parse(JSON.stringify(isf))
    const [consolidator, setConsolidator] = useState({
        ...isf1.consolidator
    });


    const qualifierTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, qualifierType: e.target.value }))
        isf1["consolidator"]["qualifierType"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }

    const qualifierNoTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, qualifierNo: e.target.value }))
        isf1["consolidator"]["qualifierNo"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }

    const nameTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, name: e.target.value }))
        isf1["consolidator"]["name"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }


    const address1TypeChange = (e) => {
        setConsolidator((t) => ({ ...t, address1: e.target.value }))
        isf1["consolidator"]["address1"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }
    const address2TypeChange = (e) => {
        setConsolidator((t) => ({ ...t, address2: e.target.value }))
        isf1["consolidator"]["address2"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }
    const cityTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, city: e.target.value }))
        isf1["consolidator"]["city"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }
    const stateTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, state: e.target.value }))
        isf1["consolidator"]["state"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }
    const postalCodeTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, postalCode: e.target.value }))
        isf1["consolidator"]["postalCode"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }
    const countryTypeChange = (e) => {
        setConsolidator((t) => ({ ...t, country: e.target.value }))
        isf1["consolidator"]["country"] = e.target.value
        dispatch(info(isf1))
        console.log(isf)
    }

    return (
        <div>
            <fieldset >
                <legend>4. Consolidator / Suffer</legend>

                <div className="formContainer">
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorQualifier">Qualifier</label>
                        <select name="consolidatorQualifier" id="consolidatorQualifier" value={consolidator.qualifierType} onChange={qualifierTypeChange}>
                            <option  >
                                -------
                            </option>
                            <option value="sellerEIN">
                                EIN
                            </option>
                            <option value="sellerDUN">
                                DUN
                            </option>
                            <option value="sellerDN4">
                                DN4
                            </option>
                            <option value="sellerFRN">
                                FRN
                            </option>
                            <option value="sellerCBN">
                                CBN
                            </option>
                            <option value="sellerSSN">
                                SSN
                            </option>
                            <option value="sellerPAS">
                                PAS
                            </option>
                            <option value="sellerDRV">
                                DRV
                            </option>
                            <option value="sellerSGUEN">
                                SG:UEN
                            </option>
                            <option value="sellerSGGST">
                                SG:GST
                            </option>
                            <option value="sellerSGCPF">
                                SG:CPF
                            </option>
                            <option value="sellerSGIDN">
                                SG:IDN
                            </option>
                            <option value="sellerSGPAS">
                                SG:PAS
                            </option>
                            <option value="sellerSGDRV">
                                SG:DRV
                            </option>
                        </select>
                        <input type='text' name='consolidator_qualifier' id='consolidator_qualifier' value={consolidator.qualifierNo} onChange={qualifierNoTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorQualifierName">Name</label>
                        <input type='text' name='consolidatorQualifierName' id='consolidatorQualifierName' value={consolidator.name} onChange={nameTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorAddress1">Address 1:</label>
                        <input type='text' name='consolidatorAddress1' id='consolidatorAddress1' value={consolidator.address1} onChange={address1TypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorAddress2">Address 2:</label>
                        <input type='text' name='consolidatorAddress2' id='consolidatorAddress2' value={consolidator.address2} onChange={address2TypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorCity">City:</label>
                        <input type='text' name='consolidatorCity' id='consolidatorCity' value={consolidator.city} onChange={cityTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorState">State</label>
                        <input type='text' name='consolidatorState' id='consolidatorState' value={consolidator.state} onChange={stateTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorPostalCode">Postal Code</label>
                        <input type='text' name='consolidatorPostalCode' id='consolidatorPostalCode' value={consolidator.postalCode} onChange={postalCodeTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorCountry">Country</label>
                        <input type='text' name='consolidatorCountry' id='consolidatorCountry' value={consolidator.country} onChange={countryTypeChange} />
                    </div>
                </div>

            </fieldset>
        </div>

    )
}

export default ConsolidatorData;