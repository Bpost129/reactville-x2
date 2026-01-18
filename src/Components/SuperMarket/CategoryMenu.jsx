
const CategoryMenu = ({ products, setProductCategory }) => {


  // const productCats = products.map(prod => prod.category)
  // const categorySet = new Set(productCats)
  // const categories = [...categorySet]
  const categories = [...new Set(products.map(
    (prod) => prod.category
  ))]

  const handleSelect = (e) => {
    setProductCategory(e.target.value)
  }


  return (
    <select onChange={handleSelect}>
      {categories.map(cat =>
        <option value={cat}>
          {cat}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu