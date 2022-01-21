import React from "react";



const Logo = ({type}) => {
    console.log(type)
    return (
        <>
        {type[0] && type[0] === 'default' || !type ? <img src='/images/logo.svg' alt="unmuted"/> : <img src='/images/logo-muted.svg' alt="muted"/> }
        </>
    )
}

export default Logo;