import { useState, useEffect } from "react"

import BoxHolders from "./BoxHolders"

const NewBox = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  })
  const [boxholders, setBoxholders] = useState([])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const addBoxholder = (e) => {
    e.preventDefault()
    const name = formData.firstName + " " + formData.lastName
    if (!boxholders.includes(name)) {
      setBoxholders([...boxholders, name])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section className="post-office-form">

      <header>
        <h3>New PO Box</h3>
        <p>Total: $</p>
        <button id="submit-box-btn">SUBMIT</button>
      </header>

      <section>
        <BoxHolders boxholders={boxholders} />
        <input placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <input placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <button id="add-boxholder" type="submit" onClick={addBoxholder}>ADD BOXHOLDER</button>
      </section>

    </section>
  )
}

export default NewBox