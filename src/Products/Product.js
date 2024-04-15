import Card from "../components/Card";


function Product({result}) {
  return (
    <div>
      <section className="product">
       {result}
      </section>
    </div>
  )
}
export default Product;