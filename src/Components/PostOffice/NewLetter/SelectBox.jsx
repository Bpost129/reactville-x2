
const SelectBox = ({ setBoxNum, boxNumbers }) => {
  return (
    <select required name="boxNo" onChange={(e) => setBoxNum(e.target.value)}>
      <option value="">Select PO Box</option>
      {boxNumbers.map(num =>
        <option key={num} value={num}>PO Box {num}</option>
      )}
    </select>
  )
}

export default SelectBox