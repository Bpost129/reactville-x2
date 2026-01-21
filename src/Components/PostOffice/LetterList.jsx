import Letter from './Letter'

const LetterList = ({ letterIds, letters, markAsRead }) => {
  return (
    <table>
      <thead>
        <tr>
          <th width="8%">Date</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Subject</th>
          <th width="2%">Read</th>
        </tr>
      </thead>
      <tbody>
        {letterIds.map(letterId =>
          <Letter key={letterId} letterId={letterId} letters={letters} markAsRead={markAsRead} />
        )}
      </tbody>
    </table>
  )
}

export default LetterList
