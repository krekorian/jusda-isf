import React from 'react'
import { useDispatch } from 'react-redux'
import { next } from '../../features/page'
import { useSelector } from 'react-redux'
import { back } from '../../features/page'
import { info } from '../../features/isf'

const NavigationButtons = () => {
    const page = useSelector((e) => e.page.value);
    const isf = useSelector(e => e.isf.value)
    const dispatch = useDispatch();
    const nextClick = () => {
        // console.log("isf under navigationButton")
        // console.log(isf)
        // dispatch(info{...isf})
        // dispatch(info({ ...isf, nextClick: true }));
        // if (isf.emailValid && isf.phoneValid && isf.name.length > 2 && page == 0) {
        //     dispatch(next());
        //     dispatch(info({ ...isf, nextClick: false }))
        // }
        // if (page != 0) {
        dispatch(next());
        // }

    }
    return (
        <div className={page == 0 ? 'navigation btnRight' : 'navigation'}>
            {page != 0 && <button className='btn1' onClick={() => dispatch(back())}>Go Back</button>}
            <button className='btn2' onClick={nextClick}>{page == 4 ? "Create ISF" : "Next Step"}</button>
        </div>
    )
}

export default NavigationButtons