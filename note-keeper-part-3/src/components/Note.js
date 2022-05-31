import React from "react"

function Note(props) {

	function handleClick(e) {	
		props.onDelete(props.id)
	}

	return (
		<div className="note">
			<p className="note__title">{props.title}</p>
			<p className="note__content">{props.content}</p>
			<div onClick={handleClick} className="note__delete">Delete</div>
		</div>
	)
}

export default Note