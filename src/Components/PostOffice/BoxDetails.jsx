import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BoxDetails = ({ boxes, letters }) => {
  const { boxNo } = useParams()
  const box = boxes[boxNo]

  return (
    <section className="box-details">
      <header>
        <h3>PO Box</h3>
        <select>
          {box.boxHolders.map(holder =>
            <option value={holder}>{holder}</option>
          )}
        </select>
      </header>

      LetterList component here

    </section>
  )
}

export default BoxDetails