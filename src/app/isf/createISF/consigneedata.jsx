import "../createISF.css"


const ConsigneeData = () => {

    return (
        <div>
            <fieldset >
                <legend>2. Consignee Data</legend>
                <div className="formContainer">
                    <div id="fieldsetinput">
                        <label htmlFor="consigneequalifier">Qualifier</label>
                        <select name="consigneequalifier" id="consigneequalifier">
                            <option value="irs_ein">
                                IRS/EIN
                            </option>
                            <option value="cbp_no">
                                CBP Assigned Number
                            </option>

                        </select>

                        <input type='text' name='consignee_qualifier' id='consignee_qualifier' />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="consigneeQualifierName">Name</label>
                        <input type='text' name='consigneeQualifierName' id='consigneeQualifierName' />
                    </div>


                </div>

            </fieldset>
        </div>
    )

}

export default ConsigneeData;