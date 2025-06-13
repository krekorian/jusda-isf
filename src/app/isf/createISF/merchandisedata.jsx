import "../createISF.css";
import { info } from '../../../features/isf';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const MerchandiseData = () => {
    console.log("insdie MerchandiseData");
    const dispatch = useDispatch();
    const isf = useSelector(e => e.isf.value);
    let isf1 = JSON.parse(JSON.stringify(isf));
    console.log(isf1.merchantData)
    const initialmerchantData = (i) => {
        if (isf1.merchantData.length === 1) {

            // for (let key in i[0]) {
            //     console.log(key, i[0][key]);
            // }
            for (const [key, value] of Object.entries(i[0])) {
                console.log(`value ${value}`)
                console.log(value)
                if (value != "") {
                    return ([...i])
                }
                console.log("not ''")
            }
            return []
        }
        return [...i]


    }
    const [merchantData, setmerchantData] = useState([...initialmerchantData(isf1.merchantData)])

    const [merchandiseData, setMerchandiseData] = useState({
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
    }

    );

    console.log("merchandiseData data array");
    console.log(merchandiseData);
    console.log("merchantData data array");
    console.log(merchantData);
    console.log(merchantData.length);

    const a = merchantData.map((item) => {
        return item.qualifierNo
    })

    console.log(a)


    const checkarraystat = () => {
        console.log(`Array is ${typeof (merchandiseData)}`)
    }

    const coTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, co: e.target.value }))
        checkarraystat()

    }

    const manufacturerSupplierTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, manufacturerSupplier: e.target.value }))
        checkarraystat()
    }

    const qualifierTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, qualifierType: e.target.value }))
        checkarraystat()
    }

    const qualifierNoTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, qualifierNo: e.target.value }))
        checkarraystat()
    }

    const nameTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, name: e.target.value }))

    }
    const address1TypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, address1: e.target.value }))

    }
    const address2TypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, address2: e.target.value }))

    }
    const cityTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, city: e.target.value }))

    }
    const stateTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, state: e.target.value }))

    }
    const postalCodeTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, postalCode: e.target.value }))

    }
    const countryTypeChange = (e) => {
        setMerchandiseData((t) => ({ ...t, country: e.target.value }))

    }

    // useEffect(() => {

    // }, [merchantData])

    const deleteItem = (itemId) => {
        console.log(itemId);
        console.log(merchantData);
        console.log("++++++++")
        const newarr = merchantData.filter((e, i) => {
            console.log(i);
            console.log(e);
            console.log(itemId);
            return i !== itemId
        })
        console.log(newarr)
        // setFruits(prev => prev.filter(fruit => fruit !== elementToRemove))
        setmerchantData(newarr)
        // const newArr = merchantData.splice(itemId, 1);
        // setmerchantData([newArr]);
        isf1["merchantData"] = newarr

        dispatch(info(isf1));
        console.log(isf1)
        console.log(merchantData);
        console.log(isf)


    }

    const addMerchanise = () => {
        console.log(`merchantData is ${typeof (merchantData.length)}`)
        console.log(`merchantData.length is ${merchantData.length}`)
        if ((merchantData.length) === 0) {
            isf1["merchantData"][0] = { ...merchandiseData }
            setmerchantData([merchandiseData])
        } else {
            isf1["merchantData"].push({ ...merchandiseData })
            setmerchantData([...merchantData, merchandiseData])
        }
        console.log(">>>>merchandiseData")
        console.log(merchandiseData)
        dispatch(info(isf1))
    }

    const showMerchanise = () => {
        console.log(isf);

    }

    return (
        <div>
            <fieldset >
                <legend>5. Merchant Data</legend>

                <div className="formContainer">
                    <div className="input_wrap" id="fieldsetinput" >
                        <label htmlFor="poNo">C/O</label>
                        <input type='text' name='co' id='co' value={merchandiseData.co} onChange={coTypeChange} />
                    </div>
                    <div className="input_wrap" id="fieldsetinput" >
                        <label htmlFor="manufacturer_supplier">Manufacturer/Supplier</label>
                        <input type='text' name='manufacturer_supplier' id='manufacturer_supplier' value={merchandiseData.manufacturerSupplier} onChange={manufacturerSupplierTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantQualifier">Qualifier</label>
                        <select name="merchantQualifier" id="merchantQualifier" value={merchandiseData.qualifierType} onChange={qualifierTypeChange}>
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
                        <input type='text' name='merchant_qualifier' id='merchant_qualifier' value={merchandiseData.qualifierNo} onChange={qualifierNoTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantQualifierName">Name</label>
                        <input type='text' name='merchantQualifierName' id='merchantQualifierName' value={merchandiseData.name} onChange={nameTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantAddress1">Address 1:</label>
                        <input type='text' name='merchantAddress1' id='merchantAddress1' value={merchandiseData.address1} onChange={address1TypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantAddress2">Address 2:</label>
                        <input type='text' name='merchantAddress2' id='merchantAddress2' value={merchandiseData.address2} onChange={address2TypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantCity">City:</label>
                        <input type='text' name='merchantCity' id='merchantCity' value={merchandiseData.city} onChange={cityTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantState">State</label>
                        <input type='text' name='merchantState' id='merchantState' value={merchandiseData.state} onChange={stateTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantPostalCode">Postal Code</label>
                        <input type='text' name='merchantPostalCode' id='merchantPostalCode' value={merchandiseData.postalCode} onChange={postalCodeTypeChange} />
                    </div>
                    <div id="fieldsetinput">
                        <label htmlFor="merchantCountry">Country</label>
                        <input type='text' name='merchantCountry' id='merchantCountry' value={merchandiseData.country} onChange={countryTypeChange} />
                    </div>
                    <button onClick={addMerchanise}>Add Merchandise</button>
                    <button onClick={showMerchanise}>Add Merchandise</button>

                    <div>
                        <p>Merchandise List</p>
                        <div>
                            <div>
                                {merchantData.map((item, indx) => (
                                    <div key={indx}>
                                        {item.co}
                                        <button onClick={() => deleteItem(indx)}>Delete</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset >

        </div>
    )
}


export default MerchandiseData;