import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'
import defaultLogo from '../../../public/images/logo.svg';


const Logo = ({type}) => {
    return (
        <>
        {type === 'default' || !type ? <img src={defaultLogo.src} alt="unmuted"/> : <img src={mutedLogo.src} alt="muted"/> }
        </>
    )
}

export default Logo;