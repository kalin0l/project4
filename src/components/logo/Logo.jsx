import React from "react";
import mutedLogo from '../../../public/images/logo-muted.svg'
import defaultLogo from '../../../public/images/logo.svg';


const Logo = ({type}) => {
    console.log(mutedLogo)
    return (
        <>
        {type === 'unmuted' ? <img src="/_next/static/image/public/images/logo.6b59795bbe7c48890d55a096f225136b.svg" alt="unmuted"/> : <img src="/_next/static/image/public/images/logo-muted.2f8352c43fd037ed40b582fbeea23296.svg" alt="muted"/> }
        </>
    )
}

export default Logo;