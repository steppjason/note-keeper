import React from "react"

function Note() {
	return (
		<div className="note">
			<p className="note__title">{title}</p>
			<p className="note__content">{content}</p>
		</div>
	)
}

const title = "Note Title"
const content = "Note content."

export default Note