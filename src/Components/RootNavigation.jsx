import { NavLink, useRouteLoaderData } from "react-router-dom";

export default function RootNavaigation() {
  const Data=useRouteLoaderData("DataTitle")

  return (
    <>
      <div className="Navigation">
        <div className="NavgationGrid">
          <div className="NavigationLink">
            <NavLink to="" className={({isActive})=> isActive ? "action" : "none"} end >
              <h5>خانه</h5>
              <img src="home.png"/>
            </NavLink>
          </div>
          {Data?.map((item, index)=>{
            return(
                <div className="NavigationLink" >
                  <NavLink to={item.Title} className={({isActive})=> isActive ? "action" : "none"}>
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
