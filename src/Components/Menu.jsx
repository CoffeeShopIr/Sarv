import { Link } from "react-router-dom"

export default function Menu({data}){
    console.log(data)
    
    return(
        <>
            <div className="menu">
                    {data && data.map((item,i)=>{
                        return(
                            <>
                                <div style={{backgroundImage:`url(${item.Title}.jpeg)`}}>
                                    <Link to={item.Title}>
                                        <li key={i}>{item.Title}</li>
                                    </Link>
                                </div>
                            </>

                        )
                    })}

            </div>
        </>
    )
}