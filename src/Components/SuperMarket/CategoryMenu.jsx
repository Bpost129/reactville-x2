
const CategoryMenu = ({ products }) => {
  const productCats = products.map(prod => prod.category)
  const categorySet = new Set(productCats)
  const categoryMenu = [...categorySet]

  

  return (
    <select>
      {categoryMenu.map(cat =>
        <option>
          {cat}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu