import { useEffect, useState } from "react"
import Modal from "./Modal"
import ModalInfo from "./ModalInfo"


export default function Header({data}){
    const [slider,setSlider]=useState(0)
    const [open , setOpen]=useState(false)

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
                    <p>به کافه سرو خوش آمدید</p>
                    <button onClick={()=>handelOpenModal()}>درباره ما</button>
                </div>
                <div className="backImg">
                    <img src={data[slider].Title+".webp"}/>
                    <Modal open={open} handelCloseModa={handelCloseModa}>
                        <ModalInfo/>
                    </Modal>
                </div>
            </header>
        </>
    )
}