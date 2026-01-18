
const CategoryMenu = ({ products }) => {


  // const productCats = products.map(prod => prod.category)
  // const categorySet = new Set(productCats)
  // const categories = [...categorySet]
  const categories = [...new Set(products.map(
    (prod) => prod.category
  ))]


  return (
    <select>
      {categories.map(cat =>
        <option>
          {cat}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu