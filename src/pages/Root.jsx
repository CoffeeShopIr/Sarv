import { Outlet } from "react-router-dom";
import RootNavaigation from "../Components/RootNavigation";

export default function Root(){
    return(
        <>
        <RootNavaigation/>
        <Outlet/>
        </>
    )
}