import Input from "../../components/Input";
import "./Colors.css"
function Colors({handleChange}) {
  const data = [
    {
      "value": "",
      "title": "All",
      "name": "test3",
      "color":"linear-gradient(blue, crimson)"
    },
    {
      "value": "black",
      "title": "Black",
      "name": "test3",
      "color":"black"
    },
    {
      "value": "red",
      "title": "Red",
      "name": "test3",
      "color":"red"
    },
    {
      "value": "green",
      "title": "Green",
      "name": "test3",
      "color":"green"
    },
    {
      "value": "blue",
      "title": "Blue",
      "name": "test3",
      "color":"blue"
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
          color={element.color}
        />
      )
    }
  )
  return (
    <>
      <div className="colors-card">
        <h2 className="colors-card__title">Colors</h2>
       <div>
        <p>
          {displaydata}
        </p>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test3"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
       </div>
      </div>
      </>
  )
}
export default Colors;