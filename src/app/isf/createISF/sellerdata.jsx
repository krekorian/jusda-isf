import "../createISF.css"
import { info } from '../../../features/isf';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SellerData = () => {
    const dispatch = useDispatch();
    const isf = useSelector(e => e.isf.value);
    let isf1 = JSON.parse(JSON.stringify(isf))
    const [sellerDataEntry, setsellerDataEntry] = useState({
        ...isf1.sellerData
    });

    const qualirfierTypeChange = (e) => {
                setsellerDataEntry((t) => ({ ...t, qualifierType: e.target.value }))
                isf1["sellerData"]["qualifierType"] = e.target.value
                dispatch(info(isf1))
                console.log(isf)
            }

    return (
        <div>
            <fieldset >
                <legend>3. Seller Data</legend>

                <div className="formContainer">
                    <div id="fieldsetinput">
                        <label htmlFor="sellerQualifier">Qualifier</label>
                        <select name="sellerQualifier" id="sellerQualifier" value={sellerDataEntry.qualifierType} onChange={qualirfierTypeChange}>
                            <option  >
                                -------
                            </option>
                            <option value="sellerEIN" >
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
                        <input type='text' name='seller_qualifier' id='seller_qualifier' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerQualifierName">Name</label>
                        <input type='text' name='sellerQualifierName' id='sellerQualifierName' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerAddress1">Address 1:</label>
                        <input type='text' name='sellerAddress1' id='sellerAddress1' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerAddress2">Address 2:</label>
                        <input type='text' name='sellerAddress2' id='sellerAddress2' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerCity">City:</label>
                        <input type='text' name='sellerCity' id='sellerCity' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerState">State</label>
                        <input type='text' name='sellerState' id='sellerState' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerPostalCode">Postal Code</label>
                        <input type='text' name='sellerPostalCode' id='sellerPostalCode' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="sellerCountry">Country</label>
                        <input type='text' name='sellerCountry' id='sellerCountry' />
                    </div>
                </div>

            </fieldset>
        </div>

    )
}

export default SellerData;