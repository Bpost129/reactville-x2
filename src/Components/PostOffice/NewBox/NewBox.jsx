import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from "./BoxHolders"

const NewBox = ({ createBox }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  })
  const [boxholders, setBoxholders] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const addBoxholder = (e) => {
    e.preventDefault()
    const name = formData.firstName + " " + formData.lastName
    if (!boxholders.includes(name)) {
      setBoxholders([...boxholders, name])
      setFormData({ firstName: '', lastName: '' })
    }
  }

  const removeBoxholder = (person) => {
    console.log(person)
    let removed = boxholders.filter(holder => {
      return holder !== person
    })
    setBoxholders([...removed])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createBox(boxholders)
    handleRedirect()
  }

  const handleRedirect = () => {
    navigate('/postoffice', { replace: true })
  }

  console.log()

  return (
    <section className="post-office-form">

      <header>
        <h3>New PO Box</h3>
        <p>Total: $</p>
        <button id="submit-box-btn" disabled={!boxholders} onClick={handleSubmit}>SUBMIT</button>
      </header>

      <section>
        <BoxHolders boxholders={boxholders} removeBoxholder={removeBoxholder} />
        <input placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <input placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <button id="add-boxholder" type="submit" disabled={!formData.firstName || !formData.lastName} onClick={addBoxholder}>ADD BOXHOLDER</button>
      </section>

    </section>
  )
}

export default NewBox