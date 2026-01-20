import BoxDetails from "./BoxDetails"


const BoxList = ({ boxes }) => {
  const boxList = Object.keys(boxes)

  console.log(boxList)

  return (
    <section className="po-box-list">
      {boxList.map(box => 
        <BoxDetails key={box} box={boxes[box]} />
      )}
    </section>
  )
}

export default BoxList