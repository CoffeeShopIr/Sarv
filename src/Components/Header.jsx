import { useEffect, useState } from "react"


export default function Header({data}){
    const [slider,setSlider]=useState(0)
    useEffect(()=>{
        let Time=setTimeout(()=>{
            setSlider(prev=>{
                let updata=prev
                if(prev ===data.length -1){
                    return updata=0
                }else {
                    return updata=updata+1
                }
            })
        return ()=> clearTimeout(Time)
        },6000)
    },[slider])
    return(
        <>
            <header>
                <div className="centerItem">
                    <h1>Sarv</h1>
                    <p>hellow welcome to SarvCoffeShop</p>
                    <button>About</button>
                </div>
                <div className="backImg">
                    {data?.map((item,index)=>{
                        // console.log(index===slider && item)
                        return(
                                <img key={index} src={index===slider && item.Tittle+".jpeg"}/>
                        )
                    })}
                    <img src="دمنوش.jpeg"/>
                </div>
            </header>
        </>
    )
}