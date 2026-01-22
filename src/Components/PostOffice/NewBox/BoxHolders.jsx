
const BoxHolders = ({ boxholders, removeBoxholder }) => {
  return (
    <div className="box-holders">
      {boxholders.length ? <h4>Box Holders:</h4> : <h4>Add a Boxholder</h4>}
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