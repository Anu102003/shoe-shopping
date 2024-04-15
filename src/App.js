import { useState } from 'react';
import Nav from './Navigation/Nav';
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
import Dropdown from './Dropdown/Dropdown';

//database
import products from './db/data'

function App() {
  // ----------- Radio Filter -----------
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  console.log(selectedCategory)
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;




  //   // Applying selected filter
  //   if (selected) {
  //     console.log("selected",selected)
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, color, company, newPrice, title }) =>
  //         category === selected ||
  //         color === selected ||
  //         company === selected ||
  //         newPrice === selected ||
  //         title === selected
  //     );
  //   }


  // // ----------- checkbox Filtering -----------
  const [checkboxCategory, setcheckboxCategory] = useState([]);

  const handlecheckboxChange = (event) => {
    const value = event.target.value;
    setcheckboxCategory((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((option) => option !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  //Function for filtering radio and checkbox 
  function filteredData(products, selected, selectedCategory,query) {
    let filteredProducts = products;
    // Filtering Input Items
    
    // Filtering checkbox Items
    filteredProducts = products.filter((item) => {
      if (selected.length === 0 || selected.includes("")) {
        return true;
      } else {
        return selected.includes(item.category);
      }
    });
    if (query) {
      filteredProducts = filteredItems;
    }
    console.log(filteredProducts)
    if (filteredProducts.length === 0) {
      filteredProducts = products;
    }

    // Filtering radio Items
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selectedCategory ||
          color === selectedCategory ||
          company === selectedCategory ||
          newPrice === selectedCategory ||
          title === selectedCategory
      );
    }
    console.log(filteredProducts)
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, checkboxCategory, selectedCategory,query);
  return (
    <div className="App">
      <Sidebar handleChange={handleChange} handlecheckboxChange={handlecheckboxChange} />
      <Nav query={query} handleInputChange={handleInputChange}/>
      {/* <Recommended handleClick={handleClick}/> */}
      <Recommended />
      <Dropdown/>
      <Product result={result} />
    </div>
  );
}

export default App;
