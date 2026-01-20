
const BoxList = ({ boxes }) => {
  const boxList = Object.keys(boxes)

  console.log(boxList)

  return (
    <section className="po-box-list">
      {boxList.map(box => 
        <div>
          <p>{boxes[box].boxHolders}</p>
        </div>
      )}
    </section>
  )
}

export default BoxList