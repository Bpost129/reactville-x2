
const BoxHolders = ({ boxholders, removeBoxholder }) => {
  return (
    <div className="box-holders">
      <h4>Boxholders:</h4>
      {boxholders.map(person =>
        <div key={person}>
          <p>{person}</p>
          <button onClick={() => removeBoxholder(person)}>Remove</button>
        </div>
      )}
    </div>
  )
}

export default BoxHolders