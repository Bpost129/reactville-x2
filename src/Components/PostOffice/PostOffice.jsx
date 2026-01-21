import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import BoxList from './BoxList'
import BoxDetails from './BoxDetails'
import NewLetter from './NewLetter/NewLetter'
import NewBox from './NewBox/NewBox'

//Data & Assets
import LobbyImg from '../../assets/post-office-lobby.png'
import { initialPOBoxes, initialLetters } from "../../data/post-data"

import '../../styles/mail.css'

const PostOffice = (props) => {
	const [letters, setLetters] = useState(initialLetters)
	const [boxes, setBoxes] = useState(initialPOBoxes)

	const markAsRead = (id, status) => {
		setLetters({ ...letters, [id]: { ...letters[id], read: status } })
	}

	console.log(initialPOBoxes, initialLetters)

	return (
		<div className="post-office">

			<nav>
				<h1>Post Office</h1>
				<NavLink to="/postoffice">
					Lobby
				</NavLink>
				<NavLink to="/postoffice/letters/new">
					New Letter
				</NavLink>
				<NavLink to="/postoffice/boxes/new">
					New PO Box
				</NavLink>
			</nav>

			<div className="postoffice-layout">
				<section className="img-container"><img src={LobbyImg} alt="post office illustration" /></section>
				<Routes>
					<Route path='/' element={<BoxList boxes={boxes} />} />
					<Route path='/:boxNo' element={<BoxDetails boxes={boxes} letters={letters} markAsRead={markAsRead} />} />
					<Route path='/letters/new' element={<NewLetter />} />
					<Route path='/boxes/new' element={<NewBox />} />
				</Routes>
			</div>

		</div>
	)
}

export default PostOffice