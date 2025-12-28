import { useParams } from "react-router-dom"

export default function DetailMenu({data}){
    const params=useParams()
    console.log(data)
    return(
        <>
            <h1>{params.Detailsid}</h1>
            {data && data.map((items,i)=>{
                return(
                    <li>{items.Name} ------ {items.Price}</li>
                )
            })}
        </>
    )
}



export async function LoaderDetails({request , params}){
    const detailId = params.Detailsid
    const res=await fetch("https://opensheet.elk.sh/1Afmrmd7qaaUtMYapHnbDmW4Ny1feuywlKxW_YvuULKg/" + detailId)
    if(!res.ok){
        throw new Error("اطلاعات دریافت نشد")
    }
    else{
        return res;
    }
}