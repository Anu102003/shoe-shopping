import Input from "../../components/Inputcheckbox";
import "./Category.css"
function Category({ handlecheckboxChange }) {
  const data = [
    {
      "value": "",
      "title": "All",
      "name": "test"
    },
    {
      "value": "sneakers",
      "title": "Sneakers",
      "name": "test"
    },
    {
      "value": "flats",
      "title": "Flats",
      "name": "test"
    },
    {
      "value": "sandals",
      "title": "Sandals",
      "name": "test"
    },
    {
      "value": "heels",
      "title": "Heels",
      "name": "test"
    }
  ]
  const displaydata = data.map(
    (element) => {
      return (
        <Input
        handlecheckboxChange={handlecheckboxChange}
          value={element.value}
          title={element.title}
          name={element.name}
        />
      )
    }
  )
  return (
    <>
      <div className="category-card">
        <h2 className="category-card__title">Category</h2>
        <div>
          <p>
            {displaydata}
          </p>
        </div>
      </div>
    </>
  )
}
export default Category;