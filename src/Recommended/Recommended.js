import "./Recommended.css"

function Recommended() {
  return (
    <div className="recommended-card">
      <h2 className="recommended-card__title">Recommended</h2>
      <div className="recommended-card__btns">
        <button className="btns">All Products</button>
        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Vans</button>
      </div>
    </div>
  )
}
export default Recommended;
