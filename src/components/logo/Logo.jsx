import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'
import defaultLogo from '../../../public/images/logo.svg';


const Logo = ({type}) => {
    console.log(type)
    return (
        <>
        {type === 'default' || !type ? <img src='/images/logo.svg' alt="unmuted"/> : <img src='/images/logo-muted.svg' alt="muted"/> }
        </>
    )
}

export default Logo;