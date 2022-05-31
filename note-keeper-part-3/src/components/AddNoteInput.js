import React, { useState } from "react"
import { v4 as uuid} from "uuid"

function AddNoteInput(props) {

	const [note, setNote] = useState(
		{
			id: uuid(),
			title: "",
			content: ""
		}
	)

	function handleChange(e) {
		const { name, value } = e.target

		setNote(prev => {
			return {
				...prev, 
				[name]: value
			}
		})
	}

	function addNote(e) {
		e.preventDefault()
		props.onAdd(note)
		resetNote()
	}

	function resetNote() {
		let id = uuid()
		setNote(prev => {
			return {
				id: id,
				title: "",
				content: ""
			}
		})
	}

	return (
		<div className="input">
			<form>
				<input name="title" value={note.title} onChange={handleChange} className="input__title" type="text" placeholder="Note Title" />
				<textarea rows="5" name="content" value={note.content} onChange={handleChange} className="input__content" maxLength="140" type="text" placeholder="Note content" />
				<button onClick={addNote}>+</button>
			</form>
		</div>
	)
}

export default AddNoteInput