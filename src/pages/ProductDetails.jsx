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