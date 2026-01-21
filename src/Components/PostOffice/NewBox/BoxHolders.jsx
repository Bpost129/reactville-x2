
const BoxHolders = ({ boxholders}) => {
  return (
    <div className="box-holders">
      <h4>Boxholders:</h4>
      {boxholders.map(person =>
        <div key={person}>
          <p>{person}</p>
          <button>Remove</button>
        </div>
      )}
    </div>
  )
}

export default BoxHolders