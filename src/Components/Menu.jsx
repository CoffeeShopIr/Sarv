import { useState } from "react"
import { Link } from "react-router-dom"

export default function Menu({data}){
    let lastItem=""
    if((data.length/2) !== 0){
        lastItem="lastItem";
    }
    return(
        <>
            <div className={`menu ${lastItem}`}>
                    {data && data.map((item,i)=>{
                        return(
                            <>
                                <div>
                                    <Link to={item.Title}>
                                        <li key={i}>{item.Title}</li>
                                        <img src={item.Title+".webp"} />
                                    </Link>
                                </div>
                            </>

                        )
                    })}

            </div>
        </>
    )
}