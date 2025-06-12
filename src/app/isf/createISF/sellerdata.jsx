import "../createISF.css"

const SellerData = () => {
    return (
        <div>
            <fieldset >
                <legend>3. Seller Data</legend>

                <div className="formContainer">
                    <div id="fieldsetinput">
                        <label htmlFor="sellerQualifier">Qualifier</label>
                        <select name="sellerQualifier" id="sellerQualifier">
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