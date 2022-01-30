import React from "react";
import Collector from "./Collector";
import styles from './CollectorsColumn.module.scss'



export default function CollectorsColumn({items=[],type=''}){
    return (
        <div className={styles.wrapper}>
            {items.map((item,i) => {
                return <Collector key={item.id} {...item}/>
            })}

        </div>
    )
}