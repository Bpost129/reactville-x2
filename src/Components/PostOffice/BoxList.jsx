import { Link } from "react-router-dom"

const BoxList = ({ boxes }) => {
  const boxList = Object.keys(boxes)

  return (
    <section className="po-box-list">
      {boxList.map(box => 
        <Link key={box} to={`/postoffice/${box}`} >
          PO Box {box}
        </Link>
      )}
    </section>
  )
}

export default BoxList