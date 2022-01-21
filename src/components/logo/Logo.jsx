import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'
import defaultLogo from '../../../public/images/logo.svg';


const Logo = ({type}) => {
    console.log(type,defaultLogo,mutedLogo)
    return (
        <>
        {!type ? <img src={mutedLogo.src} alt="muted"/> :  <img src={defaultLogo.src} alt="unmuted"/>}
        </>
    )
}

export default Logo;