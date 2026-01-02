import { NavLink, useParams } from "react-router-dom";

export default function RootNavaigation({data}) {
  const params=useParams()
  console.log(params)

  return (
    <>
      <div className="Navigation">
        <div className="NavgationGrid">
          <div className="NavigationLink">
            <NavLink to="/" className={({isActive})=> isActive ? "action" : "none"} end >
              <h5>خانه</h5>
              <img src="sarv.jpg"/>
            </NavLink>
          </div>
          {data?.map((item, index)=>{
            return(
                <div className="NavigationLink" >
                  <NavLink to={"/"+params.id+"/"+item.Title} className={({isActive})=> isActive ? "action" : "none"}>
                    <h5>{item.Title}</h5>
                    <img src={item.Title+".webp"}/>
                  </NavLink>
                </div>
            )
          })}

        </div>
      </div>
    </>
  );
}
