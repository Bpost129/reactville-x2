
const Wallet = ({ cash }) => {
  return (
    <p className="display-items">Cash: ${cash.toFixed(2)}</p>
  )
}

export default Wallet