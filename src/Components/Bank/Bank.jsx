
import Account from './Account'

import '../../styles/bank.css'

const Bank = ({ cash, handleExchange }) => {
	return (
		<div className="bank">
			<nav>
				<h1>Bank</h1>
			</nav>
			<section>
				<Account name={'Checkings'} />
				<Account name={'Savings'} />
			</section>
		</div>
	)
}

export default Bank