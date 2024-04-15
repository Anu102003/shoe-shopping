import "./Price.css"
import Input from "../../components/Input";

 function Price({handleChange}) {
  const data = [
    {
      "value": "",
      "title": "All",
      "name": "test2",
    },
    {
      "value": "50",
      "title": "Rs.0 - Rs.50",
      "name": "test2",
    },
    {
      "value": "100",
      "title": "Rs.50 - Rs.100",
      "name": "test2",
    },
    {
      "value": "150",
      "title": "Rs.100 - Rs.150",
      "name": "test2",
    },
    {
      "value": "200",
      "title": "Over Rs.150",
      "name": "test2",
    }
  ]
  const displaydata = data.map(
    (element) => {
      return (
        <Input
          handleChange={handleChange}
          value={element.value}
          title={element.title}
          name={element.name}
        />
      )
    }
  )
  return (
    <>
    <div className="price-card">
      <h2 className="price-card__title">Price</h2>
      <div>
        <p>
          {displaydata}
        </p>
      </div>
    </div></>
  )
}
export default Price;