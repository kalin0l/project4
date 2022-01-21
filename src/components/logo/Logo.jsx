import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'


const Logo = ({type}) => {
    return (
        <>
        {type ? <img src={type.src} alt="unmuted"/>  : <img src={mutedLogo.src} alt="muted"/>   }
        </>
    )
}

export default Logo;