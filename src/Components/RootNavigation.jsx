import { NavLink } from "react-router-dom";

export default function RootNavaigation() {
  return (
    <>
      <div className="Navigation">
        <div className="NavgationGrid">
          <div className="NavigationLink">
            <NavLink to="" className={({isActive})=> isActive ? "action" : "none"} end >خانه</NavLink>
          </div>
          <div className="NavigationLink" >
            <NavLink to="اسپرسوبار" className={({isActive})=> isActive ? "action" : "none"}>اسپرسوبار</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="نوشیدنی گرم" className={({isActive})=> isActive ? "action" : "none"}>نوشیدنی گرم</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="دمنوش" className={({isActive})=> isActive ? "action" : "none"}>دمنوش</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="آیس کافی" className={({isActive})=> isActive ? "action" : "none"}>آیس کافی</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="میلک شیک" className={({isActive})=> isActive ? "action" : "none"}>میلک شیک</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="بار سرد" className={({isActive})=> isActive ? "action" : "none"}>بار سرد</NavLink>
          </div>
          <div className="NavigationLink">
            <NavLink to="کیک" className={({isActive})=> isActive ? "action" : "none"}><img src="cake.png"/>کیک</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
