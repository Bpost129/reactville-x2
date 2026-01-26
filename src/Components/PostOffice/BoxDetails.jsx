import { useParams, useNavigate } from "react-router-dom"

import LetterList from './LetterList'

const BoxDetails = ({ boxes, letters, markAsRead }) => {
  const { boxNo } = useParams()
  const box = boxes[boxNo]
  const navigate = useNavigate()

  if (!box) return (
    <div>
      <h4>Hmm, this box doesn't seem to exist.</h4>
      <button onClick={() => navigate('/postoffice')}>Return To Lobby</button>
    </div>
  )

  return (
    <section className="box-details">
      <header>
        <h3>PO Box {boxNo}</h3>
        <select>
          {box.boxHolders.map(holder =>
            <option key={holder} value={holder}>{holder}</option>
          )}
        </select>
      </header>

      <LetterList letterIds={box.letters} letters={letters} markAsRead={markAsRead} />

    </section>
  )
}

export default BoxDetails