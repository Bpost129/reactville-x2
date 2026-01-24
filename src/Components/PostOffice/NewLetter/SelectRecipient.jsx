
const SelectRecipient = ({ selectedBox, handleChange }) => {
  return (
    <select required name="recipient" onChange={(e) => handleChange(e)}>
      <option value="">Select Recipient</option>
      {selectedBox?.boxHolders.map(holder => 
        <option key={holder} value={holder}>{holder}</option>
      )}
    </select>
  )
}

export default SelectRecipient