import React from "react";
import Collector from "./Collector";


export default function CollectorColumn({items,type=''}){
    return (
        <div >
            {items.map((item,i) => {
                return <Collector key={item.id} className={classes.light} {...item} type={type}/>
            })}

        </div>
    )
}