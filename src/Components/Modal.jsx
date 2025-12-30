import { useEffect, useRef } from "react";

export default function Modal({open,children , handelCloseModa}){
    const ref=useRef()
    useEffect(()=>{
        if(open){
            ref.current.showModal()
        }else if(!open){
            ref.current.close()
        }
    },[open])
    return(
        <dialog ref={ref} className="Modal">
            {children}
            <div>
                <button onClick={()=>handelCloseModa()}>close</button>
            </div>
        </dialog>
    )
}