import { useRouteLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
export default function HomePage(){
    const data=useRouteLoaderData("DataTitle")
    return(
        <>
            <Header data={data}/>
            <Menu data={data}/>
        </>
    )
}
export async function LoaderTitle(){
    const res=await fetch("https://opensheet.elk.sh/1Afmrmd7qaaUtMYapHnbDmW4Ny1feuywlKxW_YvuULKg/headerTitle");
    if(!res.ok){
        throw new Error("اطلعات دریافت نشد")
    }
    else{
        return res
    }
}