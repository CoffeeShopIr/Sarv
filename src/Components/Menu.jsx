import { useEffect, useEffectEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Categuries } from "../data"

export default function Menu(){
    const [myUrl,setMyUrl]=useState("1Afmrmd7qaaUtMYapHnbDmW4Ny1feuywlKxW_YvuULKg")
    const [Styel,setStyel]=useState(0)
    const [loading,setLoading]=useState(false)
    const [data , setData]=useState([])
    function handelSubmit(url,i){
        setStyel(i)
        setMyUrl(url)
    }
    useEffect(()=>{
        async function getfetch(){
            setLoading(true)
            try{
                const res=await fetch("https://opensheet.elk.sh/"+myUrl+"/headerTitle")
                const response=await res.json()
                setData(response)
            }catch(err){
                throw new Error("اطلاعات دریافت نشد")
            }
            setLoading(false)
        }
        getfetch()
    },[myUrl])
    console.log(data)
    let lastItem=""
    if((data.length/2) !== 0){
        lastItem="lastItem";
    }
    return(
        <>
            <div className="categuriesButton">
                {Categuries?.map((item,i)=>{
                    return(
                        <button className={`CtBtn ${i === Styel && "red"}`} onClick={()=>handelSubmit(item.Url,i)}>{item.Title}</button>
                    )
                })}
            </div>
            {loading && <h2 style={{textAlign:"center"}}>...Loading</h2>}
            {data.length>0 &&
                <div className={`menu ${lastItem}`}>
                    {data && data.map((item,i)=>{
                        return(
                            <>
                                <div>
                                    <Link to={`${myUrl}/${item.Title}`}>
                                        <li key={i}>{item.Title}</li>
                                        <img src={item.Title+".webp"} />
                                    </Link>
                                </div>
                            </>

                        )
                    })}

            </div>}
        </>
    )
}