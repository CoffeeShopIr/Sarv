import { Link } from "react-router-dom"

export default function Menu({data}){
    console.log(data)
    function LazyImage({ src}) {
        return <img src={src} loading="lazy"/>;
    }
    return(
        <>
            <div className="menu">
                    {data && data.map((item,i)=>{
                        return(
                            <>
                                <div>
                                    <Link to={item.Title}>
                                        <li key={i}>{item.Title}</li>
                                        {LazyImage(item.Title+".jpeg")}
                                    </Link>
                                </div>
                            </>

                        )
                    })}

            </div>
        </>
    )
}