import { BsFillCartPlusFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import "../Products/Product.css" 

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <div><section className="product-card">
    <div className="product-card__img">
      <img
        src={img}
        alt={title}
      />
    </div>

    <div className="product-card__details">

      <h3 className="product-card__title">{title}</h3>

      <section className="product-card__reviews">
        <div className="product-card__reviews__rating-star">
          {star}{star}{star}{star}
       </div>
        <div className="product-card__reviews__rating-number">{reviews}</div>
      </section>

      <div className="product-card__price">
        <div >
          <span className="product-card__price__discount">Rs. {newPrice}</span> <del className="product-card__price__actual">{prevPrice} </del>
        </div>
        <div >
          <BsFillCartPlusFill className="product-card__cart" />
        </div>
      </div>

    </div>
  </section></div>
  )
}
export default Card;