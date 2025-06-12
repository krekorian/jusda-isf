import "../createISF.css"

const MerchandiseData = () => {
    return (
        <div>
            <fieldset >
                <legend>5. Merchant Data</legend>

                <div className="formContainer">
                    <div className="input_wrap" id="fieldsetinput" >
                        <label htmlFor="poNo">C/O</label>
                        <input type='text' name='co' id='co' />
                    </div>
                    <div className="input_wrap" id="fieldsetinput" >
                        <label htmlFor="manufacturer_supplier">Manufacturer/Supplier</label>
                        <input type='text' name='manufacturer_supplier' id='manufacturer_supplier' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorQualifier">Qualifier</label>
                        <select name="consolidatorQualifier" id="consolidatorQualifier">
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
                        <input type='text' name='consolidator_qualifier' id='consolidator_qualifier' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorQualifierName">Name</label>
                        <input type='text' name='consolidatorQualifierName' id='consolidatorQualifierName' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorAddress1">Address 1:</label>
                        <input type='text' name='consolidatorAddress1' id='consolidatorAddress1' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorAddress2">Address 2:</label>
                        <input type='text' name='consolidatorAddress2' id='consolidatorAddress2' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorCity">City:</label>
                        <input type='text' name='consolidatorCity' id='consolidatorCity' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorState">State</label>
                        <input type='text' name='consolidatorState' id='consolidatorState' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorPostalCode">Postal Code</label>
                        <input type='text' name='consolidatorPostalCode' id='consolidatorPostalCode' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consolidatorCountry">Country</label>
                        <input type='text' name='consolidatorCountry' id='consolidatorCountry' />
                    </div>
                    <button>Add Merchandise</button>
                    <div>
                        <p>Merchandise List</p>
                        <div>

                        </div>
                    </div>
                </div>
            </fieldset >

        </div>
    )
}


export default MerchandiseData;