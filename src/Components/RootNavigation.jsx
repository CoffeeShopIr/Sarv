import { NavLink } from "react-router-dom";

export default function RootNavaigation() {
  return (
    <>
      <div className="Navigation">
        <div className="NavgationGrid">
          <div className="NavigationLink">
            <NavLink to="" className={({isActive})=> isActive ? "action" : "none"} end ><img src="home.png"/>خانه</NavLink>
          </div>
          <div className="NavigationLink" >
            <NavLink to="اسپرسوبار" className={({isActive})=> isActive ? "action" : "none"}><img src="coffee.png"/>اسپرسوبار</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="نوشیدنی گرم" className={({isActive})=> isActive ? "action" : "none"}><img src="hotdrink.png"/>نوشیدنی گرم</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="دمنوش" className={({isActive})=> isActive ? "action" : "none"}><img src="damnosh.png"/>دمنوش</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="آیس کافی" className={({isActive})=> isActive ? "action" : "none"}><img src="icecoffee.png"/>آیس کافی</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="میلک شیک" className={({isActive})=> isActive ? "action" : "none"}><img src="milkshake.png"/>میلک شیک</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="بار سرد" className={({isActive})=> isActive ? "action" : "none"}><img src="coldbar.png"/>بار سرد </NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="کیک" className={({isActive})=> isActive ? "action" : "none"}><img src="cake.png"/>کیک</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
