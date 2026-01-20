import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import LetterList from './LetterList'

const BoxDetails = ({ boxes, letters }) => {
  const { boxNo } = useParams()
  const box = boxes[boxNo]

  return (
    <section className="box-details">
      <header>
        <h3>PO Box {boxNo}</h3>
        <select>
          {box.boxHolders.map(holder =>
            <option value={holder}>{holder}</option>
          )}
        </select>
      </header>

      <LetterList letterIds={box.letters} letters={letters} />

    </section>
  )
}

export default BoxDetails