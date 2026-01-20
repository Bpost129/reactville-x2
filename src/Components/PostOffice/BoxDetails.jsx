
const BoxDetails = ({ box }) => {
  return (
    <section className="box-details">
      <header>
        <h3>PO Box</h3>
        <select>
          {box.boxHolders.map(person => 
            <option value={person}>{person}</option>
          )}
        </select>
      </header>

      LetterList component here

    </section>
  )
}

export default BoxDetails