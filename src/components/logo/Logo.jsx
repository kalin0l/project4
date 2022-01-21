import React from "react";
import defaultLogo from '../../../public/images/logo.svg';


const Logo = ({type}) => {
    return (
        <>
        {type ? <img src={type.src} alt="unmuted"/>  : <img src={defaultLogo.src} alt="muted"/>   }
        </>
    )
}

export default Logo;