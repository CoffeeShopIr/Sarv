import { useEffect, useState } from "react"
import Modal from "./Modal"
import ModalInfo from "./ModalInfo"


export default function Header(){
    const [slider,setSlider]=useState(0)
    const [open , setOpen]=useState(false)
    // console.log(data)
    // useEffect(()=>{
    //     if(data){
    //         let Time=setTimeout(()=>{
    //             setSlider(prev=>{
    //                 let updata=prev
    //                 if(prev ===data.length -1){
    //                     return updata=0
    //                 }else {
    //                     return updata=updata+1
    //                 }
    //             })
    //         return ()=> clearTimeout(Time)
    //         },6000)
    //     }
    // },[slider])
    function handelOpenModal(){
        setOpen(prev=>!prev)
    }
    function handelCloseModa(){
        setOpen(prev=>!prev)
    }
    return(
        <>
            <header>
                <div className="centerItem">
                    <h1>Sarv</h1>
                    
                    <button onClick={()=>handelOpenModal()}>درباره ما</button>
                </div>
                <div className="backImg">
                    {/* {(data && data.length>5) ?<img src={data[slider].Title+".webp"}/> : <img src="sarv.jpg" />} */}
                    <img src="sarv.jpg" />
                    <Modal open={open} handelCloseModa={handelCloseModa}>
                        <ModalInfo/>
                    </Modal>
                </div>
            </header>
        </>
    )
}