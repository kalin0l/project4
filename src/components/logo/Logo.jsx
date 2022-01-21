import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'
import defaultLogo from '../../../public/images/logo.svg';


const Logo = ({type}) => {
    console.log(type,defaultLogo,mutedLogo)
    return (
        <>
        {type === defaultLogo ? <img src={`${defaultLogo.src}`} alt="unmuted"/> : <img src={`${mutedLogo.src}`} alt="muted"/> }
        </>
    )
}

export default Logo;