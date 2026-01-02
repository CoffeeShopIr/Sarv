import { useParams, useRouteLoaderData } from "react-router-dom"
import RootNavaigation from "./RootNavigation"

export default function DetailMenu({data}){
    const dataTitle=useRouteLoaderData("TitleId")
    const {products}=useParams()    
    return(
        <>
            <RootNavaigation data={dataTitle} />
            <section className="menu-detail">
                
                <div className="menu-border">
                    <h1>{products}</h1>
                    <div className="munu-detail-tilte">
                        <h3>: قیمت</h3>
                        <hr/>
                        <h3>: نام</h3>
                    </div>
                    <hr/>
                    {data && data.map((items,i)=>{
                        return(
                            <div className="menu-detail-menu" key={i}>
                                <li>{Number(items.Price).toLocaleString("en")}</li>
                                <div></div>
                                <li>{items.Name}</li>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}


