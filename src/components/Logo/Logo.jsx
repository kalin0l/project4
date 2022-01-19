import React from "react";


const Logo = (type) => {
    console.log(type)
    return (
        <>
        <img src={type.type.src} alt="img"/>
        </>
    )
}

export default Logo;