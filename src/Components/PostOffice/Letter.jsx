
const Letter = ({ letterId, letters }) => {

  return (
    <>
      <tr>
        <td id="letter-date">{letters[letterId].date}</td>
        <td id="letter-sender">{letters[letterId].sender}</td>
        <td id="letter-recipient">{letters[letterId].recipient}</td>
        <td id="letter-subject">{letters[letterId].subject}</td>
        <td id="letter-checkbox">
          <input name="isRead" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td id="letter-content" colSpan="5">
          {letters[letterId].content}
        </td>
      </tr>
    </>
  )
}

export default Letter