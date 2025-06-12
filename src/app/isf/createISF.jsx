
import React from 'react'
import "./createISF.css"
import "./createISF/consigneedata"
import ConsigneeData from './createISF/consigneedata';
import TransportData from './createISF/transportdata';
import SellerData from './createISF/sellerdata';
import ConsolidatorData from './createISF/consolidator';
import MerchandiseData from './createISF/merchandisedata';
import { useState } from "react";
import { useSelector } from "react-redux";
import Steps from "./steps"
import NavigationButtons from "./navigationButton"




// const CreateISF = () => {
//     return (
//         <div id="createIsfMain">
//             <h1>Create ISF Entry</h1>
//             <div className="form_wrap">
//                 <div className="form_1 data_ifo">
//                     {/* <h2>1. Transport Data</h2> */}
//                     <form id="isfForm">
//                         <TransportData />
//                         <ConsigneeData />
//                         <SellerData />
//                         <ConsolidatorData />
//                         <MerchandiseData />
//                     </form>

//                 </div>

//             </div>
//         </div>
//     )
// }

const CreateISF = () => {
    const page = useSelector((e) => e.page.value)
    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <TransportData />
            case 1:
                return <ConsigneeData />
            case 2:
                return <SellerData />
            case 3:
                return <ConsolidatorData />
            case 4:
                return <MerchandiseData />
        }
    }
    return (
        // <div id="createIsfMain">
        <main>
            <div className="Container">
                <Steps />
                <div className="content">
                    {PageDisplay()}

                    {page != 5 && <NavigationButtons />}
                </div>
            </div>
        </main>
        // </div>
    )
}


export default CreateISF;