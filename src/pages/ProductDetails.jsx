import { useLoaderData } from "react-router-dom";
import DetailMenu from "../Components/DetailMenu";

export default function ProductDetails(){
    const data=useLoaderData()
    return(
        <>
            <DetailMenu data={data}/>
        </>
    )
}
export async function LoaderDetails({request , params}){
    const id=params.products
    const detailId=params.id
    const res=await fetch("https://opensheet.elk.sh/"+ detailId + "/" + id)
    if(!res.ok){
        throw new Error("اطلاعات دریافت نشد")
    }
    else{
        return res;
    }
}
export async function LoaderTitle({request , params}){
    const detailId=params.id
    const res=await fetch("https://opensheet.elk.sh/"+ detailId + "/headerTitle")
    if(!res.ok){
        throw new Error("اطلاعات دریافت نشد")
    }
    else{
        return res;
    }
}