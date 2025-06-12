import React from 'react'
import Step from "./step"
import { useSelector } from 'react-redux'

const Steps = () => {
    const page = useSelector((e) => e.page.value)
    return (
        <div className='Steps'>
            <Step step={1} title={"Transport Data"} active={page == 0} />
            <Step step={2} title={"Consignee Data"} active={page == 1} />
            <Step step={3} title={"Seller Data"} active={page == 2} />
            <Step step={4} title={"Consolidator"} active={page == 3} />
            <Step step={5} title={"Merchant Data"} active={page == 4} />

        </div>
    )
}

export default Steps