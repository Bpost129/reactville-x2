
const SelectBox = ({ setBoxNum, boxNumbers }) => {
  return (
    <select required name="boxNo">
      <option value="">Select PO Box</option>
      {boxNumbers.map(num =>
        <option value={num}>PO Box {num}</option>
      )}
    </select>
  )
}

export default SelectBox