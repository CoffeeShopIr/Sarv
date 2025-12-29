import { useParams } from "react-router-dom"

export default function DetailMenu({data}){
    const {id}=useParams()
    console.log(data)
    
    return(
        <>
            <section className="menu-detail">
                
                <div className="menu-border">
                    <h1>{id}</h1>
                    <div className="munu-detail-tilte">
                        <h3>: قیمت</h3>
                        <hr/>
                        <h3>: اسم</h3>
                    </div>
                    <hr/>
                    {data && data.map((items,i)=>{
                        return(
                            <div className="menu-detail-menu" key={i}>
                                <li>{Number(items.Price).toLocaleString("en")}</li>
                                <hr/>
                                <li>{items.Name}</li>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}



export async function LoaderDetails({request , params}){
    const detailId = params.id
    const res=await fetch("https://opensheet.elk.sh/1Afmrmd7qaaUtMYapHnbDmW4Ny1feuywlKxW_YvuULKg/" + detailId)
    if(!res.ok){
        throw new Error("اطلاعات دریافت نشد")
    }
    else{
        return res;
    }
}