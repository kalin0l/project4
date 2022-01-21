import React from "react";



export default function Logo({type}) {
   
    return (
        <>
        {type === 'default' || !type ? <img src='/images/logo.svg' alt="unmuted"/> : <img src='/images/logo-muted.svg' alt="muted"/> }
        </>
    )
}

