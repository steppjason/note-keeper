import React from "react"

function Note(props) {
	return (
		<div className="note">
			<p className="note__title">{props.title}</p>
			<p className="note__content">{props.content}</p>
		</div>
	)
}

export default Note