import ControlPanel from "./ControlPanel"

const Account = ({ name }) => {
	return (
		<div className="account">
			<h3>{name}</h3>
			<section>
				<p>Balance:</p>
				<p>Message:</p>
			</section>
			<ControlPanel />
		</div>
	)
}

export default Account