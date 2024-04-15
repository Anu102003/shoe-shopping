import "./Sidebar.css"
import {BsCart4} from "react-icons/bs"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
 function Sidebar({handlecheckboxChange, handleChange}) {
  return (
    <>
    <section className="sidebar-card">
      <div className="sidebar-card__logo">
        <h1><BsCart4/></h1>
      </div>
      <Category  handlecheckboxChange={handlecheckboxChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}
export default Sidebar;