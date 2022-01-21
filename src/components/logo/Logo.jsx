import React from "react";



const Logo = (props) => {
    console.log(props);
   
    return (
        <>
        {props.type === 'default' || !type ? <img src='/images/logo.svg' alt="unmuted"/> : <img src='/images/logo-muted.svg' alt="muted"/> }
        </>
    )
}

export default Logo;