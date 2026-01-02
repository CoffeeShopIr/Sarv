
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useState } from "react";
export default function HomePage(){
    const [NameImg,setNameImg]=useState([])
    function HandelsetImg(data){
        setNameImg(data)
    }
    return(
        <>
            <Header data={NameImg}/>
            <Menu HandelsetImg={HandelsetImg}/>
            <Footer/>
        </>
    )
}
