import { NavLink, useRouteLoaderData } from "react-router-dom";

export default function RootNavaigation() {
  const Data=useRouteLoaderData("DataTitle")

  return (
    <>
      <div className="Navigation">
        <div className="NavgationGrid">
          <div className="NavigationLink">
            <NavLink to="" className={({isActive})=> isActive ? "action" : "none"} end >خانه</NavLink>
            <img src="home.png"/>
          </div>
          {Data?.map((item, index)=>{
            return(
                <div className="NavigationLink" >
                  <NavLink to={item.Title} className={({isActive})=> isActive ? "action" : "none"}>{item.Title}</NavLink>
                  <img src={item.Title+".webp"}/>
                </div>
            )
          })}

        </div>
      </div>
    </>
  );
}
