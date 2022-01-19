import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'


const Logo = ({type}) => {
    console.log(type)
    console.log(mutedLogo)
    return (
        <>
        {!type && <img src={mutedLogo.src} alt="muted"/>}
        {type && <img src={type.src} alt="unmuted"/>}
        </>
    )
}

export default Logo;